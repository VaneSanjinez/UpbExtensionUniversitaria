'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:NuevocursoCtrl
 * @description
 * # NuevocursoCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('NuevocursoCtrl', function ($scope,$http){

  	$scope.nuevoCurso = function(){
 		
  		var nuevoCurso = {
  			Titulo : $scope.titulo,
  			Organizador : $scope.organizador,
  			FechaInicio : ($scope.fechaDeInicio.getYear()+1900) + "-" +
  			                ($scope.fechaDeInicio.getMonth()+1) + "-" +
  			                $scope.fechaDeInicio.getDate(),
  			FechaFin : ($scope.fechaDeFin.getYear()+1900) + "-" +
  			                ($scope.fechaDeFin.getMonth()+1) + "-" +
  			                $scope.fechaDeFin.getDate(),
  			Ciudad : $scope.ciudad,
  			Costo : $scope.costo.toString(),
  			Descripcion : $scope.descripcion
  		};
  		$http.post("/insert/cursos",nuevoCurso);

  	};

  	
  	

  });
