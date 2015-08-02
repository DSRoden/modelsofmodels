(function(){
  'use strict';
  angular.module('models')
  .controller('MainCtrl', ['$scope', '$rootScope', '$timeout', '$famous', '$localStorage', function($scope, $rootScope, $timeout, $famous, $localStorage){
    $scope.$watch(function(){return $localStorage.name;},function(newVal,oldVal){
        console.log('va', newVal, oldVal);
        $rootScope.rootuser.name = $localStorage.name;
    });
    /******************************************* INITIATE FAMOUS HANDLERS, TRANSITIONS, ANIMATIONS, OPTIONS****************************/
    var Transitionable = $famous['famous/transitions/Transitionable'],
        // Easing = $famous['famous/transitions/Easing'],
        EventHandler = $famous['famous/core/EventHandler'];
        // SpringTransition = $famous['famous/core/SpringTransition'],
        // TouchSync = $famous['famous/inputs/TouchSync'];
        // Transitionable.registerMethod('spring', SpringTransition);

    //EVENT HANDLERS
    $scope.mainViewOpacity = new Transitionable(0);
    //$scope.mainEventHandler = new EventHandler();
    $scope.questionsScrollHandler = new EventHandler();

    /**************************** ON INITIAL LOAD UI-VIEW ANIMATIONS **************************/
    //page view fade in on load
    $scope.enter = function($done){
      $scope.mainViewOpacity.set([1], {duration: 250}, $done);
    };
    //page view fade on leave
    $scope.leave = function($done){
      $scope.mainViewOpacity.set([0], {duration: 250}, $done);
    };

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
    $scope.title = 'main';
  }]);
})();
