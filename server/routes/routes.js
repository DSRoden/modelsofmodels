'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    debug          = require('../lib/debug'),
    users          = require('../controllers/users');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({secret: 'ssshhhhh'}));

  app.use(debug.info);
  app.post('/register', users.register);
  app.get('/status', users.status);
  app.post('/login', users.login);
  app.get('/logout', users.logout);

  console.log('Express: Routes Loaded');
};

