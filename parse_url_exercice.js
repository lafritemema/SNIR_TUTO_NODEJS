

function parseUrl(url, callback)
{
  var reg  = /^https?:\/\//i; //regex pour identier le protocole
  var re_protocol = reg.exec(url) //je cherche le protocole sous la forme http(s)://

  //si la re trouve le protocole, je rentre dans la boucle
  if(re_protocol)
  {
    var protocol = re_protocol[0]; //je recupere la substring trouve par la reges en index 0 du tableau
    var suburl = url.substring(protocol.length); //je recupere le reste de la chaine avec substring()
    protocol = protocol.substring(0, protocol.length-3).toLowerCase(); // je met a jour mon protocole en supprimant ://

    var parastr=null;
    var urlstr = null;

    var split_url_para = suburl.split('?');//je split la chaine suburl pour separer l'url des parametre

    if(split_url_para.length>1) //si la taill de mo, split_url_para est sup a 1, j'ai des parametres
    {
      parastr = split_url_para[1]; // je recupere les parametre
    }
    urlstr = split_url_para[0]; // mon url est en item 0 de split_url_para

    var pathElements = urlstr.split('/'); //je split mon url pour obtenir les element de routage
    var domain = pathElements.shift(); // le premier elements de ma liste est le nom de domaine je le recupere en le supprimant de la liste

    var parameters = {}

    //je split parastr pour et je trasforme chaque elements sous la fomre key:val
    parastr.split('&').forEach((el)=>{
        key_val = el.split('=');
        if(key_val.length>1)
        {
          parameters[key_val[0]]= key_val[1];
        }
    });
    //je passe le resultat en parametre de ma fonction de callback
    callback(null,{'protocol':protocol, 'domain': domain, 'pathElements':pathElements, 'parameters':parameters});
  }
  else // si le regex ne trouve pas de protocole, je passe une erreur au callback
  {
    callback("url non conforme");
  }
}

var para = process.argv.slice(2); //je recupere les parametres passés a ma commande, je ne prend qu'a partir de l'index 2, les 2 premiers items sont le l'uri de node et du fichier js

try {
  var url = para[0]; //je recupere l'url
  parseUrl(url, (error, parseUrlObj)=> // je parse l'ur
  {
    // la fonction de callback prend en parametre le resultat de la fonction parseUrl
    if(!error)
    {
      console.log("Interpretation de l'url : ");
      console.log(`\t - protocole : ${parseUrlObj.protocol}\n\t - domaine : ${parseUrlObj.domain}\n\t - elements de routage : ${JSON.stringify(parseUrlObj.pathElements)}\n\t - parametres : ${JSON.stringify(parseUrlObj.parameters)}`);
    }
    else {
      console.log(error);
    }
  });
} catch (e) {
  console.log("Pas d'argument trouve.");
} finally {
  console.log('Fin du programme.');
}
