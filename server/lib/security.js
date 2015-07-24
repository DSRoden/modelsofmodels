'use strict';

var User = require('../models/user');

exports.authenticate = function(req, res, next){
  User.findById(req.session.userId, function(err, user){
    req.user = user;
    res.setHeader('X-Authenticated-User', user ? user.email : 'anonymous');
    next();
  });
};

exports.bounce = function(req, res, next){
  console.log('req', req);
  if(req.session.email || req.sessionID){
    next();
  }else{
    res.status(401).end();
  }
};

