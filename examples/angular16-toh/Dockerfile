FROM node:20-bookworm AS builder

WORKDIR /usr/local/app

COPY examples/angular16-toh/*.json /usr/local/app/
COPY examples/angular16-toh/src /usr/local/app/src
RUN npm install

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
    JS_LOADER_SNIPPET=$(/usr/local/app/docker-scripts/get-agent-snippet.sh | jq --raw-output ".jsLoaderScript") && \
    JS_PLACEHOLDER="<\!-- BROWSER_AGENT_JS_SNIPPET -->" && \
    HTML_CONTENTS=$(cat /usr/local/app/src/index.html) && \
    echo "${HTML_CONTENTS/$JS_PLACEHOLDER/"$JS_LOADER_SNIPPET"}" > /usr/local/app/src/index.html \
'''

RUN npm run build

FROM nginx:1.25.4-bookworm

COPY --from=builder /usr/local/app/dist/ /usr/share/nginx/html/
COPY examples/angular16-toh/angular-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
