# Étape 1 : build l'app
FROM node:18-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

# Clone directement dans /app
RUN git clone -b test https://github.com/StayZe/docnote.git /app

RUN npm install && npm run build

# Étape 2 : image finale légère
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
