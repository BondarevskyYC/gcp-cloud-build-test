FROM node:23-slim
WORKDIR /app
ADD . /app
CMD ["node", "server.js"]
