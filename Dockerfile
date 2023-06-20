FROM node:18
RUN apt update && apt install tini -y
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT ["/bin/tini", "--"]
CMD [ "node", "index.js" ]
