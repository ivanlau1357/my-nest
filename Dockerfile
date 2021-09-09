FROM node:14.9-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prebuild
RUN npm run build