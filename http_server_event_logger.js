//import des librairies
const http = require('http');
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;

//Nouvelle instance d'un EventEmitter
var evEmit = new EventEmitter();

//Ma fonction logMSg pour logger les
function logMsg(type, msg)
{
  var typestr="";
  switch(type)
  {
    case 'warning':
        typestr='[WARNING]';
        break;
    case 'info':
        typestr='[INFO]';
        break;
    default:
        typestr='UNKNOW';
  }
  //ajout du message de log dans le ficher logfile
  fs.appendFile('logfile', `${typestr} -> ${msg}\t\n`, function(err)
  {
    //si erreur alerte dans la console + message non logge
    if(err)
    {
      console.log('[LOGERROR] '+ err);
      console.log(`\t NON LOGGED MSG : ${typestr} -> ${msg}`);
    }
  });
}

//j'ajoute une ma fonction logMsg dans la liste des element à l'écoute de l'event 'newrequest'
evEmit.on('newrequest', logMsg);

var server = http.createServer();

server.on('request', function(request,response)
{
  if(request.url == '/forbidden')
  {
    //emission d'un event newrequest de type warning
    evEmit.emit('newrequest', 'warning',`New request on forbidden URL : ${request.url}`);
    response.writeHead(403);// status Forbidden
    response.end();
  }
  else {
    //emission d'un event newrequest de type info
    evEmit.emit('newrequest', 'info',`New request on URL : ${request.url}`);
    response.writeHead(200, {"Content-Type": "text/plain"}); //status OK
    response.end("HELLO WORLD !!");
  }
});

server.listen(8080);
