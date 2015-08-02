(function(){
  'use strict';
  angular.module('models')
  .controller('ThanksCtrl', ['$scope', '$rootScope', '$timeout', '$famous', '$http', '$localStorage', 'Status', function($scope, $rootScope, $timeout, $famous, $http, $localStorage, Status){
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

    Status.getStatus(function(data){
        $rootScope.rootuser.name = data;
        $timeout(function(){
          window.close();
        }, 200);
    });
  }]);
})();
