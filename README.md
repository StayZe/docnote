# 🚀 Docnote - Stack Next.js + Directus dockerisée

Ce projet vous permet de lancer une instance Next.js (frontend) + Directus (CMS headless) + PostgreSQL en une seule commande avec Docker.

## 📦 Prérequis

- Docker installé
- Git
- Linux (debian, ubuntu, etc...)

## ⚠️ Attention
Cette instance docker fonctionne sur Linux mais n'est pas recommandé sur Windows ni MacOS.

## 🚀 Installation
### Méthode 1 :
Cloner le repo qui va créer un dossier puis rentrer dedans :
```
git clone https://github.com/StayZe/docnote.git
cd docnote
```
Lancer via Docker compose :
```
docker compose up -d
```

### Méthode 2 :
Via portainer pour créer la stack automatiquement :

stack -> add stack -> Repository

Ajouter un nom à la stack :
```Docnote```

Repository URL : 
```https://github.com/StayZe/docnote.git```

Tout en bas le bouton : **[ deploy the stack ]**
