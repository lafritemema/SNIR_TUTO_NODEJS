var http = require('http');
var express = require('express');
var app = express();
var port = 8080;

//declaration du serveur
var server = http.createServer(app);

//declaration d'un objet socket.io à l'ecoute de notre serveur http
var io = require('socket.io').listen(server);
//une variable pour identifier les client
var client = 0;
// un .get() pour récupérer les requetes
app.get('/', function(request, response)
{
  //envoi de la réponse => template socket_index.ejs
  //dans lequel j'injecte la valeur port et client
  client++;
  response.render('socket_index.ejs', {port:port, client:client});
});

//instantation de la connexion lors de la requete client
io.sockets.on('connection', function (socket) {
    //l'objet socket represente la connexion websocket avec le client
    //j'affiche un message
    console.log('Un nouveau client est connecté !');

    //lorsque socket leve l'event newclick j'execute la fonction en callback
    socket.on('newclick', function(client)
    {
      //j'affiche un message identifiant l'action client
      console.log("click send by "+client);
      //je leve l'event clickreceived pour alerter tous les client avec le message "click send by xxx"
      io.emit('clickreceived', "click send by "+client);
    });

});


server.listen(port);