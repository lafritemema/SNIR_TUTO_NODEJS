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
.get('/batiment/etage2/bureau1', function(request, response)
{
  response.setHeader("Content-Type","text/html");
  answer = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Etage 1 Bureau 2</title>
    </head>
    <body>
      <h1>VOUS ÊTES SUR LA PAGE ETAGE 2 BUREAU 1</h1>
    </body>
  </html>`;

  response.status(200).send(answer);
})
.use('/batiment/etage1', function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Page sur l'étage 1 non trouvée");
})
.use('/batiment/etage2', function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send("Page sur l'étage 2 non trouvée");
})
.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
})
.listen(8080);
