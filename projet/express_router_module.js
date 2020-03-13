var express = require('express');
var app = express();

app.use('/users', require('./app_modules/router/user_router'));

app.use('/admin', require('./app_modules/router/admin_router'))

app.use(function(request, response, next){
    response.setHeader('Content-Type', 'text/plain');
    response.status(404).send('Page inexistante');
});

app.listen('8080');
