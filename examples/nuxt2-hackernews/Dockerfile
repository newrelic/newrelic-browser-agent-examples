FROM node:20-bookworm

WORKDIR /usr/local/app

COPY examples/nuxt2-hackernews/*.json /usr/local/app/
RUN npm install

COPY examples/nuxt2-hackernews/ /usr/local/app/

ARG NR_BROWSER_APP_GUID
ARG NR_BROWSER_ACCOUNT_ID
ARG NR_BROWSER_APP_ID
ARG NR_BROWSER_APP_NAME
ARG NR_USER_KEY
ARG NR_GQL_ENDPOINT

COPY docker-scripts/ /usr/local/app/docker-scripts/
COPY browser_agent.env /usr/local/app/
RUN apt update && apt install -y jq
RUN /bin/bash -c ''' \
    JS_LOADER_SNIPPET=$(/usr/local/app/docker-scripts/get-agent-snippet.sh | jq --raw-output ".jsLoaderScript" | sed -e "s/<script.*>//g" -e "s/<\/script>//g" ) && \
    JS_PLACEHOLDER="// BROWSER_AGENT_JS_SNIPPET" && \
    JS_CONTENTS=$(cat /usr/local/app/static/newrelic.js) && \
    echo "${JS_CONTENTS/$JS_PLACEHOLDER/"$JS_LOADER_SNIPPET"}" > //usr/local/app/static/newrelic.js \
'''

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start", "--", "--port", "80", "--hostname", "0" ]
