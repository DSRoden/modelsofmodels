'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    debug          = require('../lib/debug'),
    users          = require('../controllers/users'),
    passport       = require('passport'),
    passportConfig = require('../lib/passport/config');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  passportConfig(passport, app);

  app.use(session({secret: 'ssshhhhh'}));

  app.use(debug.info);
  app.post('/register', users.register);
  app.get('/status', users.status);
  app.post('/login', users.login);

  app.get('/logout', users.logout);

  // oauth routes
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect:'/#/thanks', failureRedirect:'/#/'}));

  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', {successRedirect:'/#/thanks', failureRedirect:'/#/'}));

  app.get('/auth/google', passport.authenticate('google',  {scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']}));
  app.get('/auth/google/callback', passport.authenticate('google', {successRedirect:'/#/thanks', failureRedirect:'/#/'}));

  console.log('Express: Routes Loaded');
};

