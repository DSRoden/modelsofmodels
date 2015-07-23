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
  // app.get('/auth/facebook', passport.authenticate('facebook', {
  //  scope: ['email']
  // }));
  // app.get('/auth/facebook/callback', users.oauthCallback('facebook'));


  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect:'/#/thanks', failureRedirect:'/#/'}));


  // // Setting the twitter oauth routes
  // app.route('/auth/twitter').get(passport.authenticate('twitter'));
  // app.route('/auth/twitter/callback').get(users.oauthCallback('twitter'));

  console.log('Express: Routes Loaded');
};

