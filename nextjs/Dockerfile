FROM node:18-alpine

# Clone le repo dans le bon dossier dès le départ
RUN apk add --no-cache git && \
    git clone -b test https://github.com/StayZe/docnote-front.git /app

WORKDIR /app

RUN npm install && npm run build

CMD ["npm", "run", "start"]
