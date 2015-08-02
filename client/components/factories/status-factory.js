(function(){
  'use strict';

  angular.module('models')
  .factory('Status', ['$http', '$localStorage', function($http, $localStorage){

    function getStatus(cb){
      $http.get('/status').then(function(response){
          console.log('repsonse from status', response);
          $localStorage.name = response.data;
          cb(response.data);
        }, function(){
          console.log('response from status empty');
          cb();
      });
    }

    return {getStatus: getStatus};
  }]);
})();
