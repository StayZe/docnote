# Étape 1 : Build
FROM node:18-alpine AS builder

# Installer git si nécessaire pour cloner
RUN apk add --no-cache git

WORKDIR /app

# Cloner le dépôt
RUN git clone -b test https://github.com/StayZe/docnote.git /app

# Installer dépendances et build
RUN npm install && npm run build

# Étape 2 : Image finale minimaliste
FROM node:18-alpine

WORKDIR /app

# Copier uniquement ce qu'il faut depuis l'étape de build
COPY --from=builder /app ./

# Exposer le port par défaut de Next.js (en mode production)
EXPOSE 3000

# Lancer l'app Next.js
CMD ["npm", "start"]
