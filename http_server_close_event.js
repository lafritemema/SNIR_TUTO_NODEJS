var http = require('http');

var server = http.createServer();

server.on('request', function(request,response)
{
  var answer = '';
  if(request.url == '/close')
  {
    answer = 'Arret du serveur';
    server.close();
  }
  else
  {
    response.writeHead(200, {"Content-Type": "text/plain"});
    answer = 'HELLO WORD !'
  }
  response.end(answer);
});

server.on('close', function()
{
  console.log("Arret du serveur demandé, fermeture du service.");
});

server.listen(8080);
