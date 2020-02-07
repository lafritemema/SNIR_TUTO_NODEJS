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
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Cette page user n'existe pas");
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
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Cette page admin  n'existe pas.");
});

// l'objet Router pour la partie admin
var router_ad_user = new express.Router();
router_ad_user.get('/', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>accueil</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE D'ACCUEIL DE LA PARTIE ADVANCED USER</h1>
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
      <h1>VOICI UNE PETITE DESCRIPTION DE LA PARTIE ADVANCED USER</h1>
    </body>
  </html>`;
  response.status(200).send(answer);
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Cette page advanced user n'existe pas.");
});

var app = express();

app.use('/users', router_user);
app.use('/admin', router_admin);
app.use('/ad_users', router_ad_user);

app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
});

app.listen('8080');
