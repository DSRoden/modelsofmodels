(function(){
  'use strict';
  angular.module('models')
  .controller('AcctCtrl', ['$scope', '$rootScope', '$timeout', '$famous', 'Account', function($scope, $rootScope, $timeout, $famous, Account){
    $scope.user = {};
    function presets(){
      $scope.confirmPassword = '';
      $scope.showAccount = false;
      $scope.showRegister = false;
      $scope.accountAction = '';
      $scope.showLogin = false;
      $scope.userSignedIn = false;
    }
    presets();

    $scope.viewAccount = function(){
     $scope.showAccount = ($scope.showAccount) ? false : true;
    };
    $scope.viewLogin = function(){
      $scope.showLogin = true;
      $scope.accountAction = 'Login';
    };
    $scope.viewRegister = function(){
      $scope.showLogin = true;
      $scope.showRegister = true;
      $scope.accountAction = 'Register';
    };
    $scope.checkPassword = function(){
      if($scope.confirmPassword === $scope.user.password){
        $scope.passwordConfirmed = true;
        console.log('passwords match');
      }
    };
    $scope.accountGo = function(action){
      switch(action){
        case 'Login':
          login($scope.user);
          break;
        case 'Register':
          register($scope.user);
          break;
      }
      presets();
    };
    $scope.logout = function(){
      Account.logout(function(response){
        console.log('logged out', response);
      });
    };
    function register(user){
      console.log('user', user);
      Account.register($scope.user, function(response){
        console.log('response from register', response);
        Account.login($scope.user, function(response){
          console.log('response from login', response);
          $rootScope.rootuser = true;
        });
      });
    }
    function login(user){
      Account.login($scope.user, function(response){
          console.log('response from login', response);
          $rootScope.rootuser = true;
          presets();
      });
    }
  }]);
})();
