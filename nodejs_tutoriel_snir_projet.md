## NOUVEAU PROJET NODEJS

### LE GESTIONNAIRE DE PAQUETS NPM

Un gestionnaire de paquets est un outil/utilitaire automatisant les processus d'installation/désinstallation/mise à jour de logiciels/librairies sur un système.
NPM est le gestionnaire de paquet officiel de NodeJS, il permet donc d'installer des modules liés à l'environnement global NodeJS ou à notre projet en cours.

#### CREATION DU PROJET

1. Initialiser le projet via la commande :
`npm init`

2. Entrer les informations demandées:
  * package name
  * version (1.0.0 par défaut)
  * description
  * entry point (défaut index.js)=> point d'entrée du projet, c'est le scrip exécuté lors de la commande
    `npm start`
  * test command => script de test du projet, c'est le script exécuté lors de la commande
    `npm test`
  * git repository => lien vers le github du projet
  * keywords => liste de tags décrivant le projet
  * author
  * license

Un fichier package.json listant les informations entrée ci dessus apparaît dans le dossier du projet

```json

  "name": "snir_tuto_project",
  "version": "1.0.0",
  "description": "projet de démonstration pour le BTS SNIR",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lafritemema/SNIR_TUTO_NODEJS.git"
  },
  "keywords": [
    "BTS",
    "SNIR",
    "tutoriel",
    "express",
    "ejs",
    "nodejs",
    "npm"
  ],
  "author": "lafritemema",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lafritemema/SNIR_TUTO_NODEJS/issues"
  },
  "homepage": "https://github.com/lafritemema/SNIR_TUTO_NODEJS#readme"
}

```
#### CHERCHER ET INSTALLER DES MODULES AVEC NPM

Le noyaux NodeJS est léger (à peine 100M) donc de base ses fonctionnalités restent basiques.
Mais l'environnement possède de nombreux modules développés par une communauté très active qui offrent des fonctionnalités avancées très variées.
La plupart de ces modules sont disponibles dans les [dépots NPM](https://www.npmjs.com/package/).

On peut chercher un module dans les dépots npm via la commande :
`npm search myrecherche`

Et installer un module via la commande :
`npm install mymodule`

Pour une installation dans l'environnement global on utilise l'option **-g**.
Exemple :
* installation du module ***n*** pour la mise à jour et la gestion des version de nodejs :
`sudo npm install -g n`
* mise à jour de ***npm*** :
`sudo npm install --upgrade npm`

#### INSTALLATION DU MODULE [EXPRESS](https://www.npmjs.com/package/express)

EXPRESS est un micro-framework pour Node.js. Il fournit des outils pour aller plus vite dans la création d'applications Node.js.

Commande d'installation : `npm install express`

Après l'installation de express via ***npm*** on peut voir qu'un nouveau dossier **node_modules** a été créé à la racine de notre projet. Ce dossier va contenir tous les modules de notre projets installé via ***npm***.
Donc ce dossier contient actuellement le module express et toutes ses dépendances.

Dans le fichier ***package.json*** un nouvel attribut _dependencies_ apparaît dans notre fichier package.
Cet attribut contient la liste des dépendences de votre projet, il est mis à jour à chaque installation effectuée via ***npm***.
Il contient actuellement une seule dépendance: ***express***.

```json
{
  "name": "snir_tuto_project",
  "version": "1.0.0",
  "description": "projet de démonstration pour le BTS SNIR",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lafritemema/SNIR_TUTO_NODEJS.git"
  },
  "keywords": [
    "BTS",
    "SNIR",
    "tutoriel",
    "express",
    "ejs",
    "nodejs",
    "npm"
  ],
  "author": "lafritemema",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lafritemema/SNIR_TUTO_NODEJS/issues"
  },
  "homepage": "https://github.com/lafritemema/SNIR_TUTO_NODEJS#readme",
  // un nouvel attribut dependencies apparait
  "dependencies": {
    "express": "^4.17.1" // notre module express fraichement installé
  }
  // ---
}
```

Un autre gros avantage de ***npm*** (et des gestionnaires de paquets en général) est constaté lors du partage de notre projet avec un tiers.
Exemple avec un des projet Mozilla codé dans l'environnement NodeJS : [PERSONNA](https://github.com/mozilla/persona)
Dans le lien ci-dessus on s’aperçoit que le dossier **node_module** est absent malgrès une liste assez chargée de dépendances dans le package.json.

Dans un projet NodeJS, la majorité du poids de nos fichiers sont contenu dans de dossier ***node_module*** et tous ces modules sont disponibles sur les dépots ***npm*** donc pourquoi intégrer ce dossier dans l'archive lors du partage ?? Cela va alourdir notre archive pour une valeur ajoutée très faible.

La liste des dépendances est visible dans le fichier package.json donc chaque utilisateurs de l'application peut identifier les modules à installer.
Mais installer tous les modules 1 par 1 ne serait pas très efficaces, on préfère utiliser la très complexe commande :
`npm install`

Cette commande va lire le fichier package.json, récupérer la liste des dépendances contenues dans l'attribut _dependencies_ et les installer 1 par 1.
