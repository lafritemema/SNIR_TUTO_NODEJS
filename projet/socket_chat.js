var http = require('http');
var express = require('express');
var app = express();
var port = 8080;

//declaration du serveur
var server = http.createServer(app);

//declaration d'un objet socket.io à l'ecoute de notre serveur http
var io = require('socket.io').listen(server);

// un .get() pour récupérer les requetes
app.get('/', function(request, response)
{
  //envoi de la réponse => template socket_alpine.ejs
  //dans lequel j'injecte la valeur port
  response.render('socket_alpine.ejs', {port:port});
});

//instantation de la connexion lors de la requete client
io.sockets.on('connection', function (socket) {
    //l'objet socket represente la connexion websocket avec le client
    //j'affiche un message
    console.log('Un nouveau client est connecté !');

    //lorsque socket leve l'event newmsg j'execute la fonction en callback
    socket.on('newmsg', function(message)
    {
      //j'affiche le message envoyé par le client
      console.log(message);
      //je leve l'event msgreceived pour alerter tous les clients
      socket.broadcast.emit('msgsend', message);
    });

});

server.listen(port);
