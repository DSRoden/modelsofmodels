(function(){
  'use strict';

  angular.module('models')
  .factory('Account', ['$http', function($http){

    function register(user, cb){
      console.log('user', user);
      $http.post('/register', user).then(function(response){
        cb(response);
      }, function(response){
        console.log('error registering', response);
      });
    }

    function login(user,cb){
      console.log('user logging in', user);
      $http.post('/login', user).then(function(response){
        cb(response);
      }, function(response){
        console.log('error login in', response);
      });
    }

    return {
        register: register,
        login: login
    };
  }]);
})();

