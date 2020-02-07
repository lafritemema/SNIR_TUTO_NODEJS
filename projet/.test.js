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
