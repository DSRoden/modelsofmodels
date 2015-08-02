(function(){
  'use strict';

  angular.module('models')
  .factory('Oauth', ['$http', '$window', '$interval', '$cookies', function($http, $window, $interval, $cookies){

    function authenticate(network){
      var authUrl = '';
      switch(network) {
        case 'facebook':
          authUrl = '/auth/facebook';
          displayPopup(authUrl, network, screen.width/2 - 200, screen.height/2 - 250, 400, 500);
          break;
        case 'twitter':
          authUrl = '/auth/twitter';
          displayPopup(authUrl, network, screen.width/2 - 200, screen.height/2 - 250, 415, 500);
        break;
        case 'google':
          authUrl = '/auth/google';
          displayPopup(authUrl, network, screen.width/2 - 200, screen.height/2 - 250, 400, 500);
        break;
      }
    }

    function displayPopup(authUrl, network, positionLeft, positionTop, width, height){
      /* jshint unused:false */
      var popup = $window.open(authUrl, '_blank', 'top=' + positionTop + ',left=' + positionLeft + ',width='+width+',height='+height),
       interval = 1000,

      //check popup vlaue on interval
      i = $interval(function(){
        interval += 500;
        try {
          if(popup.value){
            $interval.cancel(i);
            popup.close();
            console.log('Successfully added '+network+'.');
          }
        } catch(e){
          //console.log(e);
        }
      }, interval);
    }

    return {
        authenticate: authenticate
    };
  }]);
})();

