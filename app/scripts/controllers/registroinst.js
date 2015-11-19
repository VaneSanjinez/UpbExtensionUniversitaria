'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:RegistroinstCtrl
 * @description
 * # RegistroinstCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('RegistroinstCtrl', function ($scope,$http) {
  	//INSERT INTO `upbexten`.`usuarioi` (`Nombre`, `Apellidop`, `Apellidom`, `NombreInstitucion`, `Username`, `Password`, `Correo`, `Telefono`) VALUES ('Vane', 'Sanjinez', 'Rivera', 'UPSP', 'UPSP', '123', 'asdft', '1234');
  	
  	$scope.registrar = function(){
  		alert("registrando")
  		var registro = {
  			Nombre:$scope.nombreA, 
  			Apellidop:$scope.apellidopA,
  			Apellidom:$scope.apellidomA,
  			NombreInstitucion: $scope.nombre,
  			Username:$scope.username,
  			Password:$scope.password,
  			Correo:$scope.email,
  			Telefono:$scope.telefono.toString()
  		};
  		$http.post("/insert/usuarioi",registro);
  		alert("Enviado");  	
  	};


  });
