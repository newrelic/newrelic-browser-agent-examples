#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
source $SCRIPT_DIR/../browser_agent.env

function throwError {
    printf "$1\n" >&2
    exit 1
}

function getBrowserAppPropertiesByEntityGuid {
    GQL_RESULT=$(
        curl -s -f -X POST $NR_GQL_ENDPOINT \
            -H 'Content-Type: application/json' \
            -H "API-Key: $NR_USER_KEY" \
            --data-raw "{\"query\":\"{actor{entity(guid: \\\"$1\\\"){... on BrowserApplicationEntity{browserProperties{jsLoaderScript jsConfigScript jsConfig}}}}}\"}"
    ) || throwError "Could not retrieve browser app snippet"

    echo $GQL_RESULT | jq --raw-output '.data.actor.entity.browserProperties'
}

function findBrowserAppEntityByName {
    GQL_RESULT=$(
        curl -s -f -X POST $NR_GQL_ENDPOINT \
            -H 'Content-Type: application/json' \
            -H "API-Key: $NR_USER_KEY" \
            --data-raw "{\"query\":\"{actor{entitySearch(query: \\\"name='$1' AND domain='BROWSER' AND type='APPLICATION'\\\"){count results{entities{guid name}}}}}\"}"
    ) || throwError "Could not find browser app"

    echo $GQL_RESULT | jq --raw-output '.data.actor.entitySearch.results.entities[0].guid'
}

if [[ -z $NR_USER_KEY ]]; then
    printf "Missing variable. NR_USER_KEY must be set.\n" >&2
    exit 1
fi

# Get the browser app properties and assign to variable BROWSER_APP_PROPERTIES

if [[ -n $NR_BROWSER_APP_GUID ]]; then
    #echo "Retrieving browser app snippet via guid..."
    BROWSER_APP_PROPERTIES=$(getBrowserAppPropertiesByEntityGuid "$NR_BROWSER_APP_GUID")
elif [[ -n $NR_BROWSER_ACCOUNT_ID ]]; then
    if [[ -n $NR_BROWSER_APP_ID ]]; then
        #echo "Constructing browser app entity guid..."
        NR_BROWSER_APP_GUID=$(echo -n "$NR_BROWSER_ACCOUNT_ID|BROWSER|APPLICATION|$NR_BROWSER_APP_ID" | base64 | tr -d =)

        #echo "Retrieving browser app snippet via guid..."
        BROWSER_APP_PROPERTIES=$(getBrowserAppPropertiesByEntityGuid "$NR_BROWSER_APP_GUID")
    elif [[ -n $NR_BROWSER_APP_NAME ]]; then
        #echo "Retrieving browser app entity guid via name search..."
        NR_BROWSER_APP_GUID=$(findBrowserAppEntityByName "$NR_BROWSER_APP_NAME")

        #echo "Retrieving browser app snippet via guid..."
        BROWSER_APP_PROPERTIES=$(getBrowserAppPropertiesByEntityGuid "$NR_BROWSER_APP_GUID")
    else
        throwError "Missing variable. One of NR_BROWSER_APP_ID or NR_BROWSER_APP_NAME must be set."
    fi
else
    throwError "Missing variable. One of NR_BROWSER_APP_GUID or NR_BROWSER_ACCOUNT_ID must be set."
fi

if [[ -z $BROWSER_APP_PROPERTIES ]] ||
    [[ -z $(echo $BROWSER_APP_PROPERTIES | jq --raw-output '.jsLoaderScript') ]] ||
    [[ "$BROWSER_APP_PROPERTIES" == "null" ]];
then
    throwError 'Browser app could not be found. Verify inputs and try again.'
fi

echo $BROWSER_APP_PROPERTIES
