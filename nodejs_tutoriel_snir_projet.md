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

### LE MODULE EXPRESS
> Lien utile :
> * [Documentation Express](https://expressjs.com/en/4x/api.html)

Comme présenté lors de son installation, le module **express** est un module très utilisé dans NodeJS. C'est un mini-framework qui va simplifier énormément plusieurs fonctions déjà codés dans le [tutoriel précédent](./nodejs_tutoriel_snir.md).
Mais comme tous les modules de NodeJS, express s'

#### PREMIER SERVEUR EXPRESS

Pour illustrer le fonctionnement de express, reprenons un code déjà vu précédement :

```javascript
var server = http.createServer(function(request,response)
{
  var answer = '';
  //je recupere l'url via l'objet message.url
  var url = request.url;

  // j'utilise une structure conditionnelle switch pour adapter la réponse à l'url
  switch(url)
  {
    //si l'url == index je renvoi du html
    case '/web/liste':
      response.writeHead(200, {"Content-Type": "text/html"});
      answer = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
    '     <title>Liste de courses</title>
        </head>
        <body>
          <p>Liste de courses :
          <ul>
            <li>PAIN</li>
            <li>FRUITS</li>
            <li>LEGUMES</li>
          </ul>
          </p>
        </body>
      </html>`
      break;
    // si l'url == /api/list je renvoi du json
    case '/api/liste':
      response.writeHead(200, {"Content-Type": "application/json"});
      answer = JSON.stringify({"courses" : ["PAIN", "FRUITS", "LEGUMES"]});
      break;
    // si l'url ne correspond a aucun des 2 il envoi un code 404
    default:
      response.writeHead(404);
  }
  response.end(answer);
});
```

Ce code nous permettait de d'identifier l'url dans la requête du client est de renvoyer une réponse adaptée à sa demande.

Voici la fonction équivalente en utilisant **express**:

```javascript

var express = require('express'); //import du module express
var app = express(); // j'instancie un objet express.Application en utilisant la fonction express();

//puis je peux utiliser les fonction de l'objet pour récupérer les requetes clients

app.get('/web/liste', function(request, response) {
    //fonction executé lors d'une requete de type get sur l'url /index
    response.setHeader("Content-Type","text/html");
    answer = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Liste de courses</title>
      </head>
      <body>
        <p>Liste de courses :
        <ul>
          <li>PAIN</li>
          <li>FRUITS</li>
          <li>LEGUMES</li>
        </ul>
        </p>
      </body>
    </html>`

    response.status(200).send(answer);
});

app.get('/api/liste', function(request, response)
{
  //fonction executée lors d'une requete de type get sur l'url /api/list
  response.setHeader("Content-Type","application/json");
  answer = JSON.stringify({"courses" : ["PAIN", "FRUITS", "LEGUMES"]});
  response.status(200).send(answer);
});

//Attention le app.use general renvoyant l'erreur est positionne à la fin
app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page non trouvée');
});

app.listen(8080); //j'écoute sur le port 8080
```

**Attention**:
Malgrès une grand similitude entre les 2 solutions, on remarque quelques changement au niveau des méthode utilisée par l'objet ***response***:
* _writeHead()_ devient _setHeader()_.
* une methode _status()_ apparait.

Normal !! L'object ***response*** passé en paramètre de la fonction de callback n'est pas un objet [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) mais un objet [Express.Response](https://expressjs.com/en/4x/api.html#res), il possède donc des paramètres et des méthode qui lui sont propre.

Évidemment l'objet ***request*** n'est pas un objet [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) mais un objet [Express.Request](https://expressjs.com/en/4x/api.html#req)

### HTTP DOPE A L'EXPRESS

Express ne vient pas remplacer le module natif **http** , c'est plutôt un gestionnaire que l'on utilise pour récupérer (via ***http.IncomingMessage***) et transmettre (***http.ServerResponse***) des informations de/vers **http**.
Express permet à l'utilisateur (développeur) de manipuler ces informations plus rapidement et facilement.

Concrètement le code suivant :

```javaScript
var express = require('express');
var app = express();
...
app.listen(8080);
```

Est une version comprimée de :

```javaScript
var express = require('express');
var app = express();
var http = require('http');
http.createServer(app).listen(8080);
```

### LE ROUTING AVEC EXPRESS

Comme vu précédement le express nous permet de gérer le routing via la fonction **[get()](https://expressjs.com/en/4x/api.html#app.get)** de son objet **[Application](https://expressjs.com/en/4x/api.html#app)**

#### PREMIER EXEMPLE DE ROUTING

```javascript
var express = require('express');
var app = express();

app.get('/batiment/accueil', function(request, response)
{
  //fonction executée lors d'une requete de type get sur l'url /api/list
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL</h1>
      <ul>
        <li><a href="/etage1">étage 1</a></li>
        <li><a href="/etage2">étage 2</a></li>
      </ul>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/batiment/etage1', function(request, response)
{
  //fonction executée lors d'une requete de type get sur l'url /api/list
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Etage 1</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE ETAGE 1</h1>
      <ul>
        <li><a href="/etage1/bureau1">bureau 1</a></li>
        <li><a href="/etage1/bureau2">bureau 2</a></li>
      </ul>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/batiment/etage2', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Etage 2</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE ETAGE 1</h1>
      <ul>
        <li><a href="/etage2/bureau1">bureau 1</a></li>
        <li><a href="/etage2/bureau2">bureau 2</a></li>
      </ul>
    </body>
  </html>`;

  response.status(200).send(answer);
})
.get('/batiment/etage1/bureau1', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Etage 1 Bureau 1</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE ETAGE 1 BUREAU 1</h1>
    </body>
  </html>`;

  response.status(200).send(answer);
})
.use('/batiment/etage1', function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Page sur l'étage 1 non trouvé");
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
})
.listen(8080);
```

#### EXERCICE ROUTES STATIQUES

Ajoutons au code ci-dessus un code nous permettant de renvoyer une page décrivant le bureau 1 de l'étage 2.
Ajoutons également un code qui nous renvoi un status erreur si un url de l'étage 2 n'est pas reconnu.

###### [Solution possible](./projet/express_routing_simple.js)

#### LES ROUTES DYNAMIQUES

Sur l'exemple ci dessous on observe beaucoup de code en double. Pour ce type d'application on préférera les routes dynamiques aux routes statiques.

Le routes dynamique sont formulés de la façon suivante :
`/batiment/etage/:etageNum`

La variable est identifiée sous la forme ***:etageNum***. Elle est disponibles dans notre code via l'attribut ***[params](https://expressjs.com/en/4x/api.html#req.params)*** de l'objet [Express.Request](https://expressjs.com/en/4x/api.html#req) sous la forme suivante:
`request.params.etageNum`

##### EXEMPLE DE ROUTES DYNAMIQUES

```JavaScript
var express = require('express');
var app = express();

app.get('/batiment/accueil', function(request, response)
{
  //fonction executée lors d'une requete de type get sur l'url /api/list
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL</h1>
      <ul>
        <li><a href="/batiment/etage/1">étage 1</a></li>
        <li><a href="/batiment/etage/2">étage 2</a></li>
      </ul>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/batiment/etage/:etageNum', function(request, response)
{
  //fonction executée lors d'une requete de type get sur l'url /api/list
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Etage ${request.params.etageNum}</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE ETAGE ${request.params.etageNum}</h1>
      <ul>
        <li><a href="batiment/etage/1/bureau/1">bureau 1</a></li>
        <li><a href="batiment/etage/1/bureau/2">bureau 2</a></li>
      </ul>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.listen(8080)
```

##### EXERCICE ROUTES DYNAMIQUES

Ajoutons une fonction renvoyant une page décrivant les bureaux 1 et 2 des étages 1 et 2.
Ajoutons également une fonction renvoyant un message avec status 404 personnalisé pour les url étage 1 et 2.
Et enfin une fonction renvoyant un message d'erreur pour tous les autres url.

[Une solution possible](./projet/express_routing_dynamique.js)

#### LES ROUTES MULTIPLES

Avec l'augmentation de la taille de l'application, le nombre de routes statiques ou dynamiques peut vite devenir compliqué à gérer/modifier.
L'utilisation de l'objet [Express.Router](https://expressjs.com/en/4x/api.html#router) permet de gérer plus facilement ces situations.

Le principe consiste à créer plusieurs Router qui vont chacun gérer une racine d’itinéraire.

##### EXEMPLE DE ROUTE MULTIPLES

```JavaScript
var express = require('express');

//Je prépare mes objets Router
// L'objet Router pour la racine user
var router_user = new express.Router();
router_user.get('/', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL DE LA PARTIE USER</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/about', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOICI UNE PETITE DESCRIPTION DE LA PARTIE USER</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
});

// l'objet Router pour la partie admin
var router_admin = new express.Router();
router_admin.get('/', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL DE LA PARTIE ADMIN</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/about', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOICI UNE PETITE DESCRIPTION DE LA PARTIE ADMIN</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
});

var app = express();

app.use('/users', router_user);
app.use('/admin', router_admin);

app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
});

app.listen('8080');

```
##### EXERCICE ROUTES MULTIPLES

Ajoutons une interface pour les utilisateurs avancés sur la racine '/ad_user'.
Et une réponse d'erreur personnalisée pour chaque racine.

###### [Une solution possible](./projet/express_routing_dynamique.js)

#### ROUTES MULTIPLES + MODULES

Bon les routes multiples sont une bonne méthode pour déléguer une partie du routage à un autre élément mais tel qu'utilisé ci-dessus elle n'épure pas vraiment le code de notre serveur...
**Il faut optimiser notre façon de l'utiliser en encapsulant nos Router dans des modules**

##### CREER UN ROUTER ENCAPSULÉ

1. Je crée un dossier **app_modules**
`mkdir app_modules`

2. Je créé un dossier **router** dans **app_modules**
`cd app_modules | mkdir router`

3. Je créé un fichier **user_router.js** dans **router**
`cd router | touch user_router.js`

4. J'intègre le code suivant dans mon fichier **user_router.js**

```javaScript

var router = require('express').Router

var router_user = new router();
router_user.get('/', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL DE LA PARTIE USER</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.get('/about', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOICI UNE PETITE DESCRIPTION DE LA PARTIE USER</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
});

modules.exports = router_user
```
5. j'import ce module fraichement créé dans mon code

```javascript
var app = express();

app.use('/users', require('./app_modules/router/user_router'));

app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
});

app.listen('8080');

```
