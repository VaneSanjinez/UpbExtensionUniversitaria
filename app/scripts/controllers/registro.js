'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('RegistroCtrl', function ($scope,$http) {

  	$scope.registrar = function(){
  		var registro = {
  			Nombre:$scope.nombre, 
  			Apellidop:$scope.apellido,
  			Apellidom:$scope.apellidoMaterno,
  			Correo:$scope.correo,
  			Username:$scope.username,
  			Password:$scope.password,
  			Rubro:$scope.rubro,
  			Ciudad:$scope.ciudad,
  			FechaNacimiento:($scope.fecha.getYear()+1900) + "-" +
  			                ($scope.fecha.getMonth()+1) + "-" +
  			                $scope.fecha.getDate()
  		};
  		$http.post("/insert/usuariop",registro);
  		alert("Enviado");
  	};

  });
