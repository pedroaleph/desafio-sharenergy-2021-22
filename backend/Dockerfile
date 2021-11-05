FROM node:16.13.0

WORKDIR /backend
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start