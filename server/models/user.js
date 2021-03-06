'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){
  console.log('o', o);
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 3){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.facebookAuthenticate = function(token, secret, facebook, cb){
  console.log('facebook authentication in user model, token', token);
  User.collection.findOne({facebookId:facebook.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {facebookId:facebook.id, username:facebook.displayName, displayName:facebook.displayName, email:facebook.displayName, type:'facebook', loc:{}, isPublic:true, photos: [], favorites :[]};
    User.collection.save(user, cb);
  });
};

User.twitterAuthenticate = function(token, secret, twitter, cb){
  User.collection.findOne({twitterId:twitter.id}, function(err, user){
    console.log('user from twitter authenticate', user);
    if(user){
      console.log('user', user);
      return cb(null, user);
    }
    user = {twitterId:twitter.id, username:twitter.username, displayName:twitter.displayName,email:twitter.displayName, type:'twitter', loc:{}, isPublic:true, photos: [], favorites : []};
    User.collection.save(user, function(user){
      console.log('after saving', user);
      cb();
    });
  });
};

User.twitterAuthenticate = function(token, secret, twitter, cb){
  User.collection.findOne({twitterId:twitter.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {twitterId:twitter.id, username:twitter.username, displayName:twitter.displayName,email:twitter.displayName, type:'twitter', loc:{}, isPublic:true, photos: [], favorites : []};
    User.collection.save(user, cb);
  });
};

User.googleAuthenticate = function(token, secret, google, cb){
  console.log(google);
  User.collection.findOne({googleId:google.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {googleId:google.id, username:google.displayName, displayName:google.displayName,email:google.displayName, type:'google', loc:{}, isPublic:true, photos: [], favorites : []};
    User.collection.save(user, cb);
  });
};

module.exports = User;

