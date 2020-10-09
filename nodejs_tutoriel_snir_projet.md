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
Mais l'environnement possède de nombreux modules développés par une communauté très active qui offrent des fonctionnalités avancées variées.  
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

#### INSTALLATION D'UN MODULE : [EXPRESS](https://www.npmjs.com/package/express)

EXPRESS est un micro-framework pour Node.js. Il fournit des outils pour aller plus vite dans la création d'applications Node.js.

Commande d'installation : `npm install express --save`

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
Exemple avec un des projet Mozilla codé dans l'environnement NodeJS : [PERSONNA](https://github.com/mozilla/persona).  

Dans le lien ci-dessus on s’aperçoit que le dossier **node_module** est absent malgrès une liste assez chargée de dépendances dans le package.json.

Dans un projet NodeJS, la majorité du poids de nos fichiers sont contenu dans de dossier ***node_module*** et tous ces modules sont disponibles sur les dépots ***npm*** donc pourquoi intégrer ce dossier dans l'archive lors du partage ?? Cela va alourdir notre archive pour une valeur ajoutée très faible.

La liste des dépendances est visible dans le fichier package.json donc chaque utilisateurs de l'application peut identifier les modules à installer.  

Mais installer tous les modules 1 par 1 est un peu fastidieux, on va donc utiliser la commande :  `npm install`  
Cette commande va lire le fichier package.json, récupérer la liste des dépendances contenues dans l'attribut _dependencies_ et les installer 1 par 1 automatiquement.

### LE MODULE EXPRESS

> Lien utile :
> * [Documentation Express](https://expressjs.com/en/4x/api.html)

Comme présenté lors de son installation, le module **express** est un module très utilisé dans NodeJS. C'est un mini-framework qui va simplifier énormément plusieurs fonctions déjà codés dans le [tutoriel précédent](./nodejs_tutoriel_snir.md).
Mais comme tous les modules de NodeJS, express s'

### PREMIER SERVEUR EXPRESS

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
  response.send(answer);
});
```

Ce code nous permettait de d'identifier l'url dans la requête du client est de renvoyer une réponse adaptée à sa demande.

Voici la fonction équivalente en utilisant **express**:

```javascript

var express = require('express'); //import du module express
var app = express(); // j'instancie un objet express.Application en utilisant la fonction express();

//puis je peux utiliser les fonction de l'objet pour récupérer les requetes clients

app.get('/web/liste', function(request, response) {

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
Express permet à l'utilisateur (développeur) de manipuler ces informations plus rapidement et facilement : c'est un **middleware**

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

Sur l'exemple ci dessous on observe beaucoup de code en double.  
Pour ce type d'application on préférera les routes dynamiques aux routes statiques.

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
5. et j'importe ce module fraîchement créé dans le code suivant pour l'utiliser

```javascript
var express = require('express');
var app = express();

//utilisation du module user_router pour traiter les requête de la racine /users
app.use('/users', require('./app_modules/router/user_router'));


app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
});

app.listen('8080');

```

##### EXERCICE ROUTER ENCAPSULÉ

Créons un routeur ***admin_router.js*** et utilisons le pour traiter les requêtes passé sur la racine ***/admin***.

###### [Une solution possible](/projet/express_router_module.js)

#### EXPRESS ET LES MIDDLEWARES

Express est un framework basé sur le concept de **MIDDLEWARES**.
Chaque middleware est une micro-application qui assure une fonctionnalité précise.

Ces middlewares sont chargés sur le module de base Express pour augmenter ses fonctionnalités.
La version actuelle d'Express est déjà fourni avec plusieurs middleware et une multitude d'autre sont installable via npm.

On intègre une nouveau middleware en utilisant la fonction **.use()** 

##### PREMIER MIDDLEWARE : LES TEMPLATES HTML

Express nous permet également, via un middleware de notre choix de créer des pages dynamique sur la base d'un template.
Plusieurs "view engines" existent : jade/pug, ejs, Handlebars ...; Chaque module a sa syntaxe propre mais le fonctionnement généralement reste similaire.

###### UTILISER UN TEMPLATE

1. installer les engine viewer ejs et pug :

```shell
npm install ejs
npm install pug
```

2. Créer un dossier ***views*** à la racine du projet.
3. Créer un fichier ***template.ejs*** dans le dossier ***views*** et y intégrer un code html :

```html
<html>
  <head>
    <title>Template</title>
  </head>
  <body>
    <h1>VOICI MON TEMPLATE EJS</h1>
    <p>Voici un mon premier template avec le middleware <b>ejs</b> pour le moment je n'ai que du contenu statique.</p>
  </body>
</html>
```
4. Créer un fichier ***main.js*** et y ajouter le code suivant:

```javaScript
var express = require('express');
var app = express();

//app.set('view engine', 'ejs');
//app.set('views', './views');

app.get('/accueil', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  response.status(200).render('template.ejs',null);
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
})
.listen(8080);
```

Dans sa configuration initial tous les templates doivent se positionner dans le dossier ***./views*** et le viewer engine est automatiquement selectionné grace à l'extension su fichier de template mais on peut modifier ces paramêtres via la methode **set** de **app**:
* Modification du path : `app.set('views', './path/to/views')`
* Modification du viewer engine : `app.set('view engine', 'ejs')`

5. Creer un fichier ***template.pug*** :

```pug
html
head
  title TEMPLATE
body
  h1 VOICI MON TEMPLATE PUG
  p Voici un mon premier template avec le middleware <b>pug</b> pour le moment je n'ai que du contenu statique.
```
6. Et modifier le ***main.js***:

```javaScript
var express = require('express');
var app = express();

app.set('view engine', 'pug');
//app.set('view engine', 'ejs');
//app.set('views', './views');

app.get('/accueil', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  response.status(200).render('template',null);
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
})
.listen(8080);
```

###### INJECTION DE VARIABLES

L'avantage des templates réside dans la possibilité d'injecter des variables au milieu de notre code html ou d'utiliser un script pour le générer du contenu de façon dynamique.

Reprenons l'exemple utilisé pour le routing en mode template

1. Création d'un dossier ***project_views***.

2. Création du fichier template ***accueil.ejs*** dans ***project_views***:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>accueil</title>
  </head>
  <body>
    <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL</h1>
    <ul>
      <!-- j'utilise une boucle for pour generer une liste avec "num_etage" éléments-->
      <% for (var i of new Array(num_etage).keys())
      { %>
        <li><a href="/batiment/etage/<%= i %>">étage <%= i %></a></li>
      <% } %>
      <!-- fin de la boucle -->
    </ul>
  </body>
</html>
```

3. Creation du template ***etage.ejs*** dans ***project_views***:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Etage <%= etage %></title>
  </head>
  <body>
    <!-- j'insert une variable etage dans le template -->
    <h1>VOUS ÊTES SUR LA PAGE ETAGE <%= etage %></h1>
    <ul>
      <li><a href="batiment/etage/1/bureau/1">bureau 1</a></li>
      <li><a href="batiment/etage/1/bureau/2">bureau 2</a></li>
    </ul>
  </body>
</html>
```

4. Création du script ***main.js*** à la racine du projet:

```JavaScript
var express = require('express');
var app = express();

// je parametre le view engine et le path vers les templates
app.set('view engine', 'ejs');
app.set('views', './project_views');

app.get('/batiment/accueil', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  //j'utilise la methode render() de express.response pour generer le code HTML à partir du template accueil.ejs en injectant une variable num_etage
  response.status(200).render('accueil',{num_etage:4});
})
.get('/batiment/etage/:etageNum', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  response.status(200).render('etage',{'etage':request.params.etageNum});
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
})
.listen(8080);

```

#### PLUS LOIN AVEC EXPRESS

##### LE ROUTER

L'objet **[Router](https://expressjs.com/fr/4x/api.html#router)** comporte un nombre limité de fonction mais toutes très utiles.  
Toutes ces fonction (excepté .route()) renvoies l'objet Router qui les appel, on peut donc les chainer à l'infini.

Ces même fonctions sont également disponibles dans l'objet **[Application](https://expressjs.com/fr/4x/api.html#app)**

###### Methode [Router.METHOD](https://expressjs.com/fr/4x/api.html#router.METHOD)

Ce mot clé METHOD représente les methodes HTTP.
* GET => router.get()
* POST => router.post()
* UPDATE => router.update()
* ... [liste des methodes](https://expressjs.com/fr/4x/api.html#routing-methods)

Elle fonctionnent toutes de la même façon :
Router.METHOD(**url**, **action lors requête**)

On récupere les informations liées à la requête via l'objet [Request](https://expressjs.com/fr/4x/api.html#req)

```javascript
...
route = express.Router()
route //reception d'une requete GET sur /information
  .get('/information', (request, response)=>
  {
    console.log("requete GET reçue");
    response.status(200).send("SUCCESS GET");
  }) // reception d'une methode POST sur /information
  .post('/information', (request, response)=>
  {
    console.log("requete POST reçue");
    response.status(200).send("SUCCESS POST");
  })

app.use('/', route).listen(8080);

```

###### Methode [Router.route()](https://expressjs.com/fr/4x/api.html#router.route)

La methode **.route()** permet de condenser la formulations ci-dessus pour la rendre plus claire et organisée (sans répétition)

```javascript
...
route = express.Router()
route.route('/information') //reception sur /information
  .get((request, response)=> // si GET
  {
    console.log("requete GET reçue");
    response.status(200).send("SUCCESS GET");
  })
  .post((request, response)=> //si POST
  {
    console.log("requete POST reçue");
    response.status(200).send("SUCCESS POST");
  });
app.use('/', route).listen(8080);

```

###### Methode [Router.all()](https://expressjs.com/fr/4x/api.html#router.all)

La méthode **.all()** permet d'activer une fonction à chaque reception d'une requête sur l'url passé en paramêtre, quelque soit la méthode HTTP utilisée. 

Le callback en parametre de cette fonction doit prendre un troisième parametre ***next*** qui represente le middleware suivant.

```javascript
...
route = express.Router()
app.route('/information') //reception sur /information
  .all((request, response, next)=> 
  { // appel a chaque requete
    console.log('requete sur /information')
    next() // j'appel le middleware suivant GET ou POST en fonction de la requete
  })
  .get((request, response)=> // si GET
  {
    console.log("requete GET reçue");
    response.status(200).send("SUCCESS GET");
  })
  .post((request, response)=> //si POST
  {
    console.log("requete POST reçue");
    response.status(200).send("SUCCESS POST");
  });

app.use('/', route).listen(8080);
```

###### Methode [Router.param()](https://expressjs.com/fr/4x/api.html#router.param)

La methode **.param()** permet d'identifier la présence d'un paramêtre dynamique dans l'url. 

Le callback en parametre de cette fonction prend également le parametre ***next*** qui represente le middleware suivant mais aussi ***id*** qui représente la valeur du paramêtre.

> Il est possible de passer des informations au middleware suivant en intégrant des parametres dans la fonction **next()**. 


```javascript

var alter = {
  'batman':'Bruce Wayne',
  'superman':'Clark Joseph Kent'
}

route = express.Router()

// si presence du parametre dynamique "para" 
route.param('para', (request, response, next, id)=>
  {
    console.log('parametre PARA identifié');
    //j'affiche la valeur de para
    console.log("Valeur du para : %s", id);
    // je recupere la veritable identité dans alter et je cree une cle identité dans request
    request.identite = alter[id];
    next();
  });

route.route('/information/:para') //reception sur /information
  .all((request, response, next)=> 
  { // appel a chaque requete
    // j'affiche l'url et le request.identité
    console.log('requete sur /information pour %s', request.identite);
    next();
  })
  .get((request, response)=>
  {
    console.log("requete GET reçue");
    response.status(200).send(`SUCCESS GET POUR ${request.identite}`);
  });

route.route('/description/:para')//reception sur /description
  .all((request, response, next)=> 
  { 
    console.log('requete sur /description pour %s', request.identite);
    next();
  })
  .get((request, response)=>
  {
    console.log("requete GET reçue");
    response.status(200).send(`SUCCESS GET POUR ${request.identite}`);
  });

app.use('/', route).listen(8080);
```

###### Methode [Router.use()](https://expressjs.com/fr/4x/api.html#router.use)

Comme la méthode **.use()** de **Application**, celle de **Router** permet d'ajouter un middleware à notre Router. 
Ce middleware peut être :
* un module installé via npm (ex: body-parser)
* un autre Router
* une simple fonction

> le module [body-parser](https://github.com/expressjs/body-parser) fonction .json() permet de parser simplement le corps (.body) de l'object [Request](https://expressjs.com/fr/api.html#req).
> Depuis la version 4 , des middleware de parsing basé sur **body-parser** on été intégrés en natif à express (express.json(), express.raw(), express.text(), express.static(), express.text(), express.urlencoded())

```javascript
// a vous de préparer l'utilisation de bodyparser
bodyparser = require('body-parser');

//creation router main
main = express.Router();
//ajout du middleware body-parser format json()
//peut être remplace par express.json() à partir de la version 4.X 
main.use(bodyparser.json());

//je cree et parametre mon router route_weap
route_weap = express.Router();
route_weap.route('/accueil')
  .all((request, response, next)=>
  {
    console.log("requete sur /weapons/accueil");
    next();
  })
  .get((request, response)=>
  {
    console.log("requete GET reçue");
    response.status(200).send("SUCCESS GET");
  })
  .post((request, response)=>
  {
    console.log("requete POST reçue");
    //je recupere la data lié à la requet via l'objet request.body préalablement parse par bodyparser.json()
    console.log("user : %s", request.body.user)
    response.status(200).send("SUCCESS POST");
  });

//je cree et parametre mon router route_char 
route_char = express.Router();
route_char.route('/accueil')
  .all((request, response, next)=>
  {
    console.log("requete sur /character/accueil");
    next();
  })
  .get((request, response)=>
  {
    console.log("requete GET reçue");
    response.status(200).send("SUCCESS GET");
  })
  .post((request, response)=>
  {
    console.log("requete POST reçue");
    console.log("user : %s", request.body.user)
    response.status(200).send("SUCCESS POST");
  });

// j'ajoute des middlewares au router main via la fonction .use()
main
.use('/characters', route_char) // j'ajoute un router
.use('/weapons', route_weap) // j'ajoute un autre router
.use((request, response)=> // j'ajoute une fonction (en cas d'url non reconnu)
{
  console.log("url %s non reconnu", request.url)
  response.status(400).send("REQUEST ERROR")
});

app.use('/', main).listen(8080);

//reste a faire un CURL pour visualiser le résultat.
```

##### REQUEST / RESPONSE

L'objet [Request](https://expressjs.com/fr/api.html#req) représente la requête client, il contient donc **toutes** les informations la concernant.
Via ses parametres et ses méthodes, il permet de s'adapter aux attentes client et de logger des infos precieuse pour l'analyse ultérieure.

L'objet [Response](https://expressjs.com/en/4x/api.html#res) représente la réponse server, permet de préparer précisément les data et les metadata a envoyer au client.  

>[Application.locals](https://expressjs.com/fr/4x/api.html#app.locals) utilisé ci-dessous à été intégré à la version 4.X de express et nous permet de définir des variable 'globale" lié à l'application (conf, env ...).

```javascript

// le parametre locals de app nous permet d'integrer des variables liée à l'application
app.locals.root = process.env.PWD

var heros = 
{
  batman:{
    identite: "Bruce Wayne",
    ville:"Gotham City"
  },
  superman:{
    identite: "Clark Joseph Kent",
    ville: "Metropolis"
  }
}

app.route('/description/:hero')
  .all((request, response, next)=>
  {
    // affichage du HTTP Method et du path
    console.log("Requete %s sur l'url %s", request.method, request.path);
    // address ip du client ::ffff pour IPV4
    console.log("addresse ip du client : %s", request.ip)
    //j'affiche la valeur de l'element dynamique hero
    console.log("Parametre hero : %s", request.params.hero);
    // j'affiche le protocole
    console.log('Protocole utilisé : %s', request.protocol);
    
    // j'affiche les parametre de l'url, il sont contenu dans la variable .query
    q_para = "";
    for(var key in request.query)
    {
      q_para += `\t${key} = ${request.query[key]}\n`;
    }
    console.log("Parametres dans l'url :\n%s", q_para);
    //j'affiche le Content-Type
    console.log("Content-type : %s", request.get('Content-Type'));
    //j'affiche le charset
    console.log("charset : %s", request.get('charset'))
    //j'affiche le Accept
    console.log('Accept : %s', request.get('Accept'))
    //J'affiche le encodings
    console.log('Accept : %s', request.get('Content-Encoding'))
    next()
  })
  .get((request, response)=>
  {
    data = {hero : request.params.hero, desc : heros[request.params.hero]}
    //j'utilise request.accepts() pour identifier le contenu accepté par le client
    if(request.accepts('text/html'))
    {
      // j'envoi une reponse avec Content-Type: text/html, j'utilise response.render() pour generer le html via le template
      response.status(200).type('text/html').render('hero.ejs', data)
    }
    else if(request.accepts('application/json'))
    {
      //je renvoi une reponse au format JSON via request.json(), le Content-Type est defini en auto par .json()
      response.status(200).json(data)
    }
    else{
      response.status(417).send("header Accept manquant ou non reconnu")
    }
  })
  .post((request, response)=>
  {
    response.send('end')
  });

app.use((request, response)=>
{
  console.log('ERROR : requete %s sur url inconnu %s', request.method, request.originalUrl)
  if(request.accepts('text/html'))
    {
      // je renvoi un fichier 404.png avec response.sendFile()
      response.status(404).sendFile(`./media/404.png`,{root:app.locals.root});
    }
    else if(request.accepts('application/json'))
    {
      response.status(404).send(`ERROR : url ${request.originalUrl} inexistant`);
    }
    else{
      response.status(417).send("ERROR: header Accept manquant ou non reconnu")
    }
})
app.listen(8080)
```

##### APP SETTING TABLE

La **[app setting table](https://expressjs.com/fr/4x/api.html#app.settings.table)** est un tableau de variable permettant de stocket des informations diverse concernant notre serveur Express.

Vous pouvez, via la fonction [Application.set()](https://expressjs.com/fr/4x/api.html#app.set), définir des variables suivant votre besoin sous le format **clé** : **valeur**.  
**Attention : certaine clés sont réservée par le système et nécessitent des valeurs définie** ([liste clés reservé](https://expressjs.com/fr/4x/api.html#app.settings.table)), exemples :
* views : string => path vers le dossier template
* view engine : string => middleware générateur de template
* query parser : string => middleware parser de requête 
* ...

La fonction [Application.get()](https://expressjs.com/fr/4x/api.html#app.set) permet de récupérer la valeur de la variable.

Les fonctions [Application.disable()](https://expressjs.com/fr/4x/api.html#app.disable) et [Application.enable()](https://expressjs.com/fr/4x/api.html#app.enable) permettent de desactiver/activer ces variables.
Les fonction [Application.disabled()](https://expressjs.com/fr/4x/api.html#app.disable) et [Application.enabled()](https://expressjs.com/fr/4x/api.html#app.enable) permettent de contrôler si les variables sont activées/desactivées.


```JavaScript
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.set('views', './project_views');
app.set('appTitle', 'Titre par défaut');

//je charge le middleware body-parser, bonne solution pour le parsing du body de la request POST

//je defini la route pour /application
app.route('/application')
.get((request, response)=>
{
  //reponse a la requete GET
  response.setHeader("Content-Type","text/html");
  
  //j'utilise app.get() pour recupere la variable appTitle de la app setting table
  response.status(200).render('acceuil_app.ejs',{title : app.get('appTitle')});
  //a vous d'ecrire le template acceuil_app.ejs et d'injecter la variable title
  
})
.post((request, response)=>
{
  //reponse a la requete POST
  // je verifie si j'ai l'info title dans les data du POST
  if (request.body.title)
  {
    //si'info est presente je fait l'update
    app.set('appTitle', request.body.title);
    //et je renvoi SUCCESS
    response.status(200).send("SUCCESS");
  }
  else
  {
    //si non presente je renvoi DEFAULT
    response.status(400).send("DEFAULT")
  }
});

app.listen(8080)
```

##### 



##### LA GESTION DES COOKIES

> Lien utile :
> * [Les cookies](https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent) 

Les cookies permettent au server de stocker un faible volume d'information coté client sur le navigateur.
Sur express les cookies sont générés par l'objet Response et lus par l'objet Request.

On utilise le middleware [cookie-parser](https://www.npmjs.com/package/cookie-parser) pour récupérer et parser facilement les cookies.

```javascript 
var cp = require('cookie-parser');
// j'integre le middleware cookie-parser
app.use(cp())

var user =
{
  lafritemema:
  {
    login:'lafritemema',
    id : 'hexaid',
    profil : 'user'
  }
}

//je prepare un route pour GET sur login
app.get('/login', (request, response)=>
{
    response.status(200).render('login.ejs')
    //a vous d'ecrire le template login.ejs contenant un formulaire permettant de se logger
    //il devra faire un redirect vers /getuser avec le parametre url login 
}) // je prepare un root pour GET sur /user pour generer un cookie
.get('/getuser', (request, response, next)=>
{ 
    //je recuperer le parametre login dans l'url
    var login = request.query.login;
    //je genere le cookie user et je fait un redirect vers room
    response.cookie('user', user[login]).redirect('/room');
})

// route pour recuperer requete sur /room
app.route('/room')
  .all((request, response, next)=>
  {
    
    if(request.cookies && request.cookies.user)
    {
      //si cookies.user present, je passe au prochain middle
      console.log(request.cookies)
      next()
    }
    else
    {
      //sinon je fait un redirect vers /login
      response.redirect('/login')
    }
  })
  .get((request, response)=>
  {   
      //je renvoi un template avec les info contenu dans le cookie.user
      console.log(request.cookies)
      data = {login:request.cookies.user.login, id:request.cookies.user.id, profil: request.cookies.user.profil}
      response.status(200).render('room.ejs', data)
      //a vous d'ecrire un template affichant le profil
  });

app.listen(8080)

```
Le code ci-dessus est une ébauche de la gestion de session.
Un middleware [express-session](https://www.npmjs.com/package/express-session) est disponible pour une gestion complète des sessions.

### LE MODULE SOCKET.IO

**socket.io** est un module NodeJS permettant une communication temps réelle entre le client et le serveur.
Elle s'appui principalement sur la technologie [Websocket](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API), une API permettant une communication bidirectionnelle entre le client et le serveur.

Le système est divisé en 2 modules :
  1. un coté client : [Le Client API](https://socket.io/docs/client-api/)
  2. un coté serveur : [Le Server API](https://socket.io/docs/server-api/)

#### MON PREMIER SOCKET

##### COTE SERVEUR

```javascript
const port = 8080;
//declaration serveur http et express
var app = require('express')();
var http = require('http');
var server = http.createServer(app);

//declaration du serveur socket
//contraction : var io = require('socket.io')(server);
var IOServer = require('socket.io');
var io = new IOServer(server);

// reception sur url /
app.get('/', (request, response)=>
{
  //envoi du template socket_index.ejs
  response.status(200).render('socket_index.ejs', {'port': port});
});

// ecoute du serveur : event connection
// un objet Socket representant la connection avec le client est passe lorsque l'event est leve
io.on('connection', (socket)=>
{
  //j'affiche un message
  console.log("Nouveau client connecté.");

  // ecoute du Socket : event sendclick
  // le parametre msg est passe pendant l'event
  socket.on('sendclick', (msg)=>
  {
    // j'affiche l'id du socket client et le message passe pendant l'event
    console.log(`click send by ${socket.id}.\n message : ${msg}.` )
    //emission d'un message clickreceived avec un message
    io.emit('clickreceived', "Click bien reçu.")
  });
});
//ecoute du serveur sur le port 8080
server.listen(8080)
```

##### COTE CLIENT

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>PAGE TEST SOCKET</title>
    <!-- je declare le lien vers la librarie socket.io client  -->
    <script src="/socket.io/socket.io.js" ></script>
  </head>
  <body>
    <h1>VOICI LA PAGE DE TEST DES SOCKETS</h1>
    <button onclick="sendClick()">SEND</button>
    </div>
    <script>
      // Je cree une connexion entre le client et le serveur
      const socket = io('http://localhost:<%= port %>').open();
      //je prepare une fonction lors de l'action sur le bouton
      function sendClick()
      {
        //je leve un event sendclick avec un message 
        socket.emit('sendclick', 'Click sur button SEND');
      }
      //ecoute de l'event clickreceived sur le socket
      //parametre msg passe pendant l'event 
      socket.on('clickreceived', (msg)=>
      {
        //j'affiche un message d'alerte
        alert(msg);
      });
    </script>
  </body>
</html>
```

#### SERVER API

L'API s'appuis sur trois objets principaux:
* [Server](https://socket.io/docs/server-api/#Server)
* [Namespace](https://socket.io/docs/server-api/#Namespace)
* [Socket](https://socket.io/docs/server-api/#Socket)

##### [SERVER](https://socket.io/docs/server-api/#Server)

**Server** représente le serveur socket.io, il orchestre les communications clients/serveur et modèle les data pour les rendre compatible avec le protocole websocket.

###### Creation du serveur

Plusieurs formulation sont possible pour creer notre serveur, mais dans chacun des cas on doit associer un [http.Server](https://nodejs.org/api/http.html#http_class_http_server):

```javascript
//instance serveur http
var http = require('http').createServer();

//version condensee
var io = require('socket.io')(http);

//autres versions
//import module socket.io
var IOServer = require('socket.io');

//instance Server
var io = new IOServer(http)
//ou
var io = new IOServer();
io.listen(http) // ou io.attach(http)

```

###### Changer le port découte

Par défaut le port découte du serveur est celui du serveur HTTP mais on peut le modifier avec la fonction Server.listen()

```javascript
var io = require('socket.io')(http); //port d'ecoute du serveur Http
io.listen(8181) //ou io.attach(8181) : je change le port
```

###### Les Sockets ID

Le serveur genere un ID pour chaque socket (connexion) établies avec le client.  
Par défaut l'ID est une chaine hexadecimal (ex:nJ8dVH7nTF7iIqniAAAB)

Affichage des socket ID : 

```javascript
...
const port = 8080
app.get('/', (request, response)=>
{
  //envoi du template socket_index.ejs
  response.status(200).render('socket_index.ejs', {'port': port});
});

io.on('connection',(socket)=>
{
  //j'affiche le socket id
  console.log('nouvelle connexion id :' + socket.id)
  // je recupere la liste des socket id
  var ids = Object.keys(io.sockets.sockets)
  console.log('liste des sockets : ' + ids)
});

app.listen(port)
...
```

Il est possible de générer un ID custo pour les socket en intégrant un **middleware** au serveur via le parametre [Server.engine.generateId](https://socket.io/docs/server-api/#server-engine-generateId).  
**ATTENTION : Cet ID doit être unique pour chaque client.**

Donc coté serveur :
```javascript
...
// middleware bodyparser pour query parsing
app.use(bodyparser.json())
// prepare guest var 
var guest = 0;

// prepare mes data utilisateur
const userData = {'lafritemema':'lafritemema@gmail.com', 'momo':'dede'}


// je defini mon middleware pour generer les ID
io.engine.generateId = (request)=>
{
  //je parse l'url
  var url = new URL(request.url, `http://${request.headers.host}`);
  //et je récupere le parametre user, je fait un trim pour supprimer les eventuels espace
  var user = url.searchParams.get('user').trim()

  // si mon user est dans ma base 
  if(userData[user])
  {
    //je renvoi l'id contenu dans ma base
    return userData[user];
  }
  else
  {
    //sinon je renvoi un id de guest
    guest +=1
    return "guest"+guest
  }
}

// reception sur url /
app.get('/', (request, response)=>
{
  //envoi du template socket_index.ejs j'injecte le user en plus du port
  var user = request.query.user
  response.status(200).render('socket_index.ejs', {'port': port, 'user':user});
});

// a la connection j'affiche les id
io.on('connection',(socket)=>
{
  console.log('nouvelle connexion id :' + socket.id)
  var ids = Object.keys(io.sockets.sockets)
  console.log('liste des sockets : ' + ids)
});
...
```
et coté client:
```html
...
<script>
      const socket = io('http://localhost:<%= port %>?user=<%= user %> ').open();
    </script>
...
```

###### Contrôle de l'origine ([CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS))

Le CORS est un mécanisme de contrôle serveur-side permettant de vérifier si l'agent utilisateur domicilié sur une autre domaine à l'autorisation d'accéder aux services de l'application serveur.  
La methode [Server.origins()](https://socket.io/docs/server-api/#server-origins-value) (ou l'option **origin** de l'objet Server) nous permet d'appliquer un CORS sur notre serveur Socket.IO.


> Sur express le middleware **[cors](https://expressjs.com/en/resources/middleware/cors.html)** permet d'appliquer des contrôle CORS sur notre Server express.  

```javascript
var IOServer = require('socket.io')
var io = new IOServer()
// je defini une controle d'origin
// seul le domaine localhost, port 8080 est autorise
io.origins(['http://localhost:8080'])
io.listen(8080)

// autre solution 
var io = new IOServer({origins:['http://localhost:8080']})

//autre solution avec une fonction de callback
// origins prend 2 parametre (originurl:string, callback:function)
//le callback prend 2 parametre (message:string, success:boolean)
io.origins((originurl, callback)=>
{
  // si l'url est different de http://localhost:8080
  if(originurl !== 'http://localhost:8080)
  {
    callback("message d'erreur", false) //callback avec mon message d'erreur et le parametre success = false
  }
  else
  {
    // url est conforme
    callback(null, true) //pas de message d'erreur, success = true
  }
})
io.listen(8080)
```

###### Les Namespaces

Le **Namespace** est l'interface possedant toutes les méthodes necessaire pour la communication entre le client et le serveur Socket.IO.
Lors de l'instanciation d'un objet Server, un objet **[Namespace]()https://socket.io/docs/server-api/#Namespace)** identifié par l'url root '/' est instancié. Tous les clients connection sont lié au Namespace root.

La methode [Server.of()](https://socket.io/docs/server-api/#server-of-nsp) permet d'instancier de nouveaux **Namespace** __enfants__ en fonction de l'url passé en paramêtre :

**Coté serveur :**

```javascript
...
//declaration du Server Socket.IO
// le Namespace root '/' est instancié automatiquement
var IOServer = require('socket.io');
var io = new IOServer(server);

app.get('/:room', (request, response)=>
{
  //envoi du template socket_index.ejs j'injecte le user en plus du port
  var room = request.params.room
  console.log(room)
  response.status(200).render('socket_index.ejs', {'port': port, 'room': room});
});

// declaration des Namespace enfants
const admin_socket = io.of('/admin');
const user_socket = io.of('/user');

admin_socket.on('connection', (socket)=>
{
  console.log('connexion sur le socket admin');
});
user_socket.on('connection', (socket)=>
{
  console.log('connexion sur le socket user');
});
...
```

**Coté client :**

```html
  <script>
      const socket = io('http://localhost:<%= port %>/<%= room %>').open();
  </script>
```





##### [NAMESPACE](https://socket.io/docs/server-api/#Namespace)

Un **Namespace** est un environnement qui peut être assimilé à un canal de communication.

Le namespace __root__ '/' est instancié lors de la création du serveur.  
Il peut communiquer avec tous les socket client.

Les Namespaces __enfants__ (instancié via la methode Server.of()) ne peuvent communiquer qu'avec les sockets clients qui lui sont associés et inversement.

La division du Namespace root en namespace enfants permet de diviser la logique de l'application et de securiser les canaux de communication.

###### Communication clients

La communication entre les Socket client et le Namespace est basé sur les events.
Il utilise donc la méthodes [Namespace.emit()](https://socket.io/docs/server-api/#namespace-emit-eventName-%E2%80%A6args) qui lui permet d'envoyer un message à chaque Sockets représentant les client connectés.

**Coté serveur :**
```javascript
...
app.get('/:room', (request, response)=>
{
  //envoi du template socket_index.ejs j'injecte le user en plus du port
  var room = request.params.room
  console.log(room)
  response.status(200).render('socket_index.ejs', {'port': port, 'room': room});
});

//creation d'un nouveau namespace
const admin = io.of('/admin');

admin.on('connection', (socket)=>
  {
    // affichage du nom 
    console.log(`Connexion sur ${admin.name}`)
    // affichage de l'id du socket client 
    console.log(`Id client : ${socket.id}`);
    //afficher la liste des id clients qui sont connectés et envoi de la liste à tous les clients
    admin.clients((err, clients)=>
    {
      console.log(clients);
      //envoi de la liste au clients
      admin.emit('clientlist', clients);
    });
});
server.listen(8080)
...
```

**Coté client :**

```html
...
<body>
    <h1>VOICI LA PAGE DE TEST DES SOCKETS</h1>
    </div>
    <h2>Utilisateur connectés : </h2>
    <div id='container'></div>
    <script>
      const socket = io('http://localhost:<%= port %>/<%=room%>').open();
      // quand event clientlist leve
      socket.on('clientlist', (list)=>
      {
        // generation du html et affichage sur la page
        var txt = "";
        for(var c of list)
        {
          txt += `<p> Utilisateur ${c}<p>`;
        }
        document.getElementById('container').innerHTML = txt;
      });
    </script>
  </body>
...
```

###### Les middleware du Namespace

La fonction [Namespace.use()] permet de déclarer un nouveau middleware lié au Namespace, il sera exécuté à chaque nouvelle connexion.  
Comme express ce middleware comporte quelque parametre : le socket client et le next représentant le middleware suivant.

```javascript
const admin = io.of('/admin');
// declaration d'un middleware executé à chaque connexion client
admin.use((socket, next)=>
{
  console.log(`Connexion sur ${admin.name}`)
  // id du socket client 
  console.log(`Id client : ${socket.id}`);
  //appel du middleware suivant
  next();
});

admin.on('connection', (socket)=>
  {
    //affichage des client et envoi de la liste
    admin.clients((err, clients)=>
    {
      console.log('Liste des clients sur admin\n'+ clients);
      admin.emit('clientlist', clients);
    });
    // middleware lors de reception click
    socket.on('click', ()=>
    {
      console.log(`click send by ${socket.id}`)
    })
  });

```

###### Les Rooms

Dans chaque Namespace nous pouvont définir des chaines spécifique : les Rooms.
Par défaut lors de la création de l'objet Socket coté server, une room identifié par l'id du socket est créée.  
Mais nous pouvons créée des rooms supplémentaire pour affiner le routing les message emis par les Namespaces.  
Ces rooms sont créé automatiquement lors de l'appel de la fonction [Socket.join()](https://socket.io/docs/server-api/#socket-join-room-callback)


##### [SOCKET](https://socket.io/docs/server-api/#Socket)

Socket est l'objet fondamental pour communiquer avec le navigateur client.

###### Les informations de Socket

L'objet Socket contient les informations concernant la requete websocket via les principaux parametres :
* Socket.id : id du Socket
* [Socket.rooms](https://socket.io/docs/server-api/#socket-rooms) : les rooms du sockets
* [Socket.request](https://socket.io/docs/server-api/#socket-request) : renvoi une instance [Client.request](https://socket.io/docs/server-api/#client-request) (utilise pour acceder au cookies ou User-Agent)
* [Socket.handshake](https://socket.io/docs/server-api/#socket-handshake): renvoi un objet qui contient les information sur la requete  

###### Le middleware de Socket

Comme Namespace ou Server la fonction [Socket.use()](https://socket.io/docs/server-api/#socket-use-fn) permet d'ajouter des middleware.
Ce middleware sera executé à chaque requête transmise par ce Socket.

###### La communication client

Le Socket server envoi des message vers le socket client via les méthode .emit() et ecoute les message du socket client via la methode .on()

###### Joindre/Quitter une Room

La methodes [Socket.join()](https://socket.io/docs/server-api/#socket-join-room-callback) permet de creer/joindre une Room et la methode [Socket.leave()](https://socket.io/docs/server-api/#socket-leave-room-callback) permet de la quitter.

###### Selection des destinataires

Via la methode [Socket.to()](https://socket.io/docs/server-api/#socket-to-room) le Socket peut selectionner un destinataire.
Ce destinataire peut être une ou plusieurs  Rooms ou Sockets.

###### Le Broadcasting

Le flag __broadcast__ placé devant la fonction Socket.emit() permet d'envoyer un message à tous les Socket du namespace, excepté le Socket emetteur.

Donc :
```javascript
// sans broadcast seul le socket client recoit le message
socket.emit('msgevent', 'mon message')
```
Deviens:
```javascript
// avec broadcast, tous les socket client accepté le socket emmetteur recoivent le message
socket.broadcast.emit('msgevent', 'mon message')
```

###### Deconnexion du socket client

La methode [Socket.disconnect()](https://socket.io/docs/server-api/#socket-disconnect-close) du socket coté Server permet de déconnecter le Socket client.

###### Réagir à une deconnexion du client

L'écoute de l'event __disconnect__ permet de réagir à la deconnexion du Socket client.
Le parametre __reason__ passe au callback permet de récupérer la raison de la deconnexion.

```javascript

user.on('connection', (socket)=>
{
  socket.on('disconnect', (reason)=>
  {
    console.log(`Deconnexion du client ${socket.id}\n.Raison : ${reason}`).
  });
});

```

###### Réagir à une erreur Socket

L'écoute de l'event __error__ permet de réagir a une erreur sur la connexion Socket Client / Socket Serveur.
Le parametre __reason__ passe au callback permet de récupérer l'object Error décrivant le problème.


```javascript

user.on('connection', (socket)=>
{
  socket.on('error', (error)=>
  {
    console.log('Erreur survenue');
    console.log(error);
  });
});

```











#### CLIENT API

L'API client repose sur trois objets principaux:
* [IO](https://socket.io/docs/client-api/#IO)
* [Manager](https://socket.io/docs/client-api/#Manager)
* [Socket](https://socket.io/docs/client-api/#Socket)

##### IO

Cet Objet permet principalement d'instancier le Socket client pour la communication avec les option necessaires.

Il renvoi donc une instance de [Socket](https://socket.io/docs/client-api/#Socket).  
On utilise ensuite la fonction [Socket.open()](https://socket.io/docs/client-api/#socket-open) pour initialiser la connexion

###### Initialisation de la connexion

```html
  <script>
      // connexion au namespace root
      const socket = io('http://localhost:8080', {query: {token:'momo'}});

      // connexion namespace admin 
      const socket = io('http://localhost:8080/admin');

      // si le server socket est sous le meme domaine que le serveur express
      const socket = io('/admin');

      //connexion au serveur
      socket.open()

  </script>
```

###### Initialisation de la connexion avec paramêtre

On peut intégrer des parametres pendant création du Socket

**Coté client :**
```html
<script>
const socket = io('/admin?token=momo').open();
// ou 
const socket = io('/admin', 
  {query: 
    {token:'momo'}
  }).open()
</script>
```

**Coté serveur :**

```javascript
const admin = io.of('/admin');
admin.on('connection', (socket)=>
  {
    console.log(socket.handshake.query.token);
  });
```

##### SOCKET

L'objet Socket client comporte les fonction pricipale tel que Socket.emit() et Socket.close() pour l'écoute et la transmission de message.  
Ces méthode fonctionnent de la même façon que celle coté Server

La methode Socket.close() permet de déconnecter le Socket coté client.

Les parametres Socket.connected et Socket.disconnected permet de connaitre l'état du socket.

Les [Events](https://socket.io/docs/client-api/#Events) __connect__, __disconnect__, __error__ ... permettent de réagir en fonction des étapes de la connexion.


#### EXERCICE EXPRESS/SOCKET.IO

Coder une application de chat qui reprend les fonctions principale de express et socket.io.