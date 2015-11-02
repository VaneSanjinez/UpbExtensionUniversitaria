'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:ListacursosCtrl
 * @description
 * # ListacursosCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('ListacursosCtrl', function ($scope,$http) {
  	
  	$scope.cursos = {};
  	var where = "";
  	var filtro = {
  			WHERE: where 
  		}
  	$http.post("select/cursos",filtro).success(function(data){
  		$scope.cursos = data;
  	});

  	$scope.filtrar = function(){
  		var where = " WHERE Titulo = '" + $scope.filtro + "'";
  		var filtro = {
  			WHERE: where
  		}
  		$http.post("/select/cursos",filtro).success(function(data){
  			$scope.cursos = data;
  		});
  	};

  });
