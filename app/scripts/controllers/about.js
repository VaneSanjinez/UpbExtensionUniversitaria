'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('AboutCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Hola.....'
    ];

    
    $scope.login = function(){

    	var params = {
    		username: 'kev',
    		password: 'kev'
    	};
    	$http.post('/login',params);
    	alert("In Login");
    }

  });
