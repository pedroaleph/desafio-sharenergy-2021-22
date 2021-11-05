FROM node:16.13.0

WORKDIR /frontend
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start