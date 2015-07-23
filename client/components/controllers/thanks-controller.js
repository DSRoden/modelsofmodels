(function(){
  'use strict';
  angular.module('models')
  .controller('ThanksCtrl', ['$scope', '$rootScope', '$timeout', '$famous', function($scope, $rootScope, $timeout, $famous){
    /************************************* BEGIN SETUP PAGE DIMENSIONS *******************************/
    ////// PAGE DIMENSIONS SETUP //////
    // view width and height variables
    // var pageWidth = window.innerWidth,
    //     pageHeight = window.innerHeight;

    //functions for dynamically accessing window width and height
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };
    $scope.title = 'thanks';

    $timeout(function(){
      window.close();
    }, 2000);
  }]);
})();
