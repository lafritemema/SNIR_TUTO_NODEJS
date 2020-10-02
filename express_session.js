var express = require('express');
var session = require('express-session');
var app = express();
var random = require("random");

app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 120000 }}));

var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

var sessionData
app.get('/set_session/:user',function(req,res){
  sessionData = req.session;
  sessionData.user = {};

  sessionData.user.username = req.params.user;
  sessionData.user.id = random.int(55, 956);

  console.log("Setting session data:username=%s and salary=%s", sessionData.user.username, sessionData.user.id)

  // res.end('Saved session and salary : ' + sessionData.username);
  res.json(sessionData.user)
});


app.get('/', function(req, res)
{
  sess = req.session;
  console.log(JSON.stringify(sess));
  if(sess.user){
        res.send(sessionData.user);
    } else {
        res.redirect("/set_session/flo");
    }
});

app.get('/destroysession',function(req,res){
    sessionData = req.session;

    sessionData.destroy(function(err) {
        if(err){
            msg = 'Error destroying session';
            res.json(msg);
        }else{
            msg = 'Session destroy successfully';
            console.log(msg)
            res.json(msg);
        }
    });
});
