FROM node:18-alpine

WORKDIR /app

# Cloner le frontend
RUN apk add --no-cache git && \
    git clone -b test https://github.com/StayZe/docnote-front.git . && \
    npm install && \
    npm run build

CMD ["npm", "run", "start"]
