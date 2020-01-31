var http = require('http');

var server = http.createServer(function(request,response)
{
  var answer = '';
  if(request.url == '/close')
  {
    response.writeHead(200, {"Content-Type": "text/plain"});
    answer = 'Arret du serveur';
    server.close(function()
    {
      console.log("Arret du serveur demandé, fermeture du service.");
    });
  }
  else
  {
    response.writeHead(200, {"Content-Type": "text/plain"});
    answer = 'HELLO WORD !'
  }
  response.end(answer);
});

server.listen(8080);
