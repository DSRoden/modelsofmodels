'use strict';

var config = {};

config.twitter = {
   apiKey : process.env.TWITTER_ID,
   apiSec : process.env.TWITTER_SECRET,
   callbackURL : 'http://localhost:3333/auth/twitter/callback'
 };

config.facebook = {
  //models of models id
  clientId : process.env.FACEBOOK_ID,
  clientSecret : process.env.FACEBOOK_SECRET,
  callbackURL : 'http://localhost:3333/auth/facebook/callback'
};

// config.google = {
//   clientId : '24882528842-ktibs3f3tdfnrcdih16mtl8cpcpdr7pm.apps.googleusercontent.com',
//   clientSecret : process.env.GOOGLE_SECRET,
//   callbackURL : 'http://daniel-vm.com:3333/auth/google/callback'
// };

module.exports = config;