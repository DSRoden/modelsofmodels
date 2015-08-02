(function(){
  'use strict';

  angular.module('models', ['ui.router', 'LocalForageModule', 'famous.angular', 'ngCookies', 'ngStorage'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider){
     $urlRouterProvider.otherwise('/');

     $stateProvider
    .state('main',     {url:'/',         templateUrl:'views/main.html', controller:'MainCtrl'})
    .state('thanks',   {url:'/thanks',   templateUrl: 'views/thanks.html', controller: 'ThanksCtrl'});

    //$httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'models', storeName:'cache', version:1.0});
  }])
  .run(['$rootScope', '$http', '$localStorage', 'Status', function($rootScope, $http, $localStorage, Status){
      $rootScope.rootuser = {};
      Status.getStatus(function(data){
        $rootScope.rootuser.name = data;
      });
    }])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $httpProvider.defaults.withCredentials = true;
  });
})();
