'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [];
    $scope.addTarea = function(){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };
    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index,1);
    };
  });
