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

module.exports = router_user
