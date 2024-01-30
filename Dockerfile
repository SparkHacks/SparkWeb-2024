FROM node:lts AS runtime

LABEL "org.opencontainers.image.source"="https://github.com/sparkhacks/sparkweb"
LABEL "org.opencontainers.image.title"="sparkweb"
LABEL "org.opencontainers.image.url"="https://github.com/sparkhacks/sparkweb"
LABEL "wtf" "1"

WORKDIR /app

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321
RUN npm install
RUN npm run build

EXPOSE 4321
CMD HOST=0.0.0.0 node ./dist/server/entry.mjs
