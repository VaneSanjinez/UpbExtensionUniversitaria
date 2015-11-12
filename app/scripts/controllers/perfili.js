'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:PerfiliCtrl
 * @description
 * # PerfiliCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('PerfiliCtrl', function ($scope, $http) {
 	$scope.usuarioi={};
    	var where = " WHERE CodigoUsuarioI = 1";
    	var filtro = {
    	 	WHERE : where
	  }

		$http.post("select/usuarioi",filtro).success(function(data){
  		$scope.usuarioi = data[0];
  		});

	$scope.editar= function(){
    	$scope.perfilInstitucion = "True";
    	$scope.editarDatos = "False";
    };
    $scope.guardar = function(){
      //UPDATE `upbexten`.`usuarioi` SET `Apellidop`='Sanj' WHERE `CodigoUsuarioI`='1';
      //UPDATE `upbexten`.`usuarioi` SET `NombreInstitucion`='UPSPA' WHERE `CodigoUsuarioI`='1';
      var registro = {
        NombreInstitucion:$scope.usuarioi.NombreInstitucion, 
        Nombre:$scope.usuarioi.Nombre,
        Apellidop:$scope.usuarioi.Apellidop,
        Apellidom:$scope.usuarioi.Apellidom,
        Telefono:$scope.usuarioi.Telefono,
      };
    	$http.post("/update/usuarioi/1", registro);
      
      alert("Datos actualizados");
    };
  });
