FROM node:lts AS runtime
WORKDIR /app

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321
RUN npm install
RUN npm run build

EXPOSE 4321
CMD HOST=0.0.0.0 node ./dist/server/entry.mjs
