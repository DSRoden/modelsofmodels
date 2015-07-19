(function(){
  'use strict';
  angular.module('models')
  .controller('AcctCtrl', ['$scope', '$rootScope', '$timeout', '$famous', 'Account', function($scope, $rootScope, $timeout, $famous, Account){
    $scope.user = {};
    $scope.confirmPassword = '';
    $scope.checkPassword = function(){
		if($scope.confirmPassword === $scope.user.password){
            $scope.passwordConfirmed = true;
			console.log('passwords match');
		}
    };
    $scope.register = function(user){
    console.log('user', user);
		Account.register($scope.user, function(response){
			console.log('response from register', response);
      Account.login($scope.user, function(response){
        console.log('response from login', response);
      });
		});
    };
  }]);
})();
