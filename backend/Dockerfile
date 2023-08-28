FROM node:18.17.0

WORKDIR /usr/src/app/backend

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN ls -a
RUN npm install
RUN npm install -g ts-node
RUN npm i -D typescript ts-node @types/node @types/express
COPY .env ./

EXPOSE 3333

CMD ["npm","run","dev"]