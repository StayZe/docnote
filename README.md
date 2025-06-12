# 🚀 Docnote - Stack Next.js + Directus dockerisée

Ce projet vous permet de lancer une instance Next.js (frontend) + Directus (CMS headless) + PostgreSQL en une seule commande avec Docker.

---

## 📦 Prérequis

- Docker installé
- Git (facultatif, mais conseillé)

---

## 🚀 Installation
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