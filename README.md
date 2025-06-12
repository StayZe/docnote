# 🚀 Docnote - Stack Next.js + Directus dockerisée

Ce projet vous permet de lancer une instance Next.js (frontend) + Directus (CMS headless) + PostgreSQL en une seule commande avec Docker.

## 📦 Prérequis

- Docker installé
- Git
- Linux (debian, ubuntu, etc...)

## ⚠️ Attention
Cette instance docker fonctionne sur Linux mais n'est pas recommandé sur Windows ni MacOS.

## 🚀 Installation
Cloner le repo qui va créer un dossier puis rentrer dedans :
```
git clone https://github.com/StayZe/docnote.git
cd docnote
```
Lancer via Docker compose (**recommandé**) :
```
docker compose up -d
```

Ou lancer via docker run :

```
docker run -d \
  --name docnote-directus \
  --env-file ./directus/directus.env \
  -v $(pwd)/directus/schema:/directus/schema \
  -p 8055:8055 \
  --link docnote-db:db \
  directus/directus:latest \
  sh -c "
    npx directus bootstrap &&
    npx directus schema apply /directus/schema/schema.yaml &&
    npx directus start
  "
```
