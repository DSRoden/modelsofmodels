(function(){
  'use strict';
  angular.module('models')
  .controller('ThanksCtrl', ['$scope', '$rootScope', '$timeout', '$famous', '$http', '$localStorage', function($scope, $rootScope, $timeout, $famous, $http, $localStorage){
    /************************************* BEGIN SETUP PAGE DIMENSIONS *******************************/
    ////// PAGE DIMENSIONS SETUP //////
    // view width and height variables
    // var pageWidth = window.innerWidth,
    //     pageHeight = window.innerHeight;
    $rootScope.rootuser = {};
    //functions for dynamically accessing window width and height
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };
    $scope.title = 'thanks';

    $http.get('/status').then(function(response){
        console.log('repsonse from status', response);
        $rootScope.rootuser.email = response.data;
        $rootScope.$broadcast('email');
        $localStorage.name = response.data;
        $timeout(function(){
          window.close();
        }, 200);
      }, function(response){
        console.log('response error from status', response);
        // $rootScope.rootuser = false;
    });
  }]);
})();
