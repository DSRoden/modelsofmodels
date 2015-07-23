(function(){
  'use strict';

  angular.module('models', ['ui.router', 'LocalForageModule', 'famous.angular', 'ngCookies'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider){
     $urlRouterProvider.otherwise('/');

     $stateProvider
    .state('main',     {url:'/',         templateUrl:'views/main.html', controller:'MainCtrl'})
    .state('thanks',   {url:'/thanks',   templateUrl: 'views/thanks.html', controller: 'ThanksCtrl'});

    //$httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'models', storeName:'cache', version:1.0});
  }])
  .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        console.log('repsonse from status', response);
        $rootScope.rootuser = true;
      }, function(){
        console.log('response from status empty');
        $rootScope.rootuser = false;
      });
    }])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $httpProvider.defaults.withCredentials = true;
  });
})();
