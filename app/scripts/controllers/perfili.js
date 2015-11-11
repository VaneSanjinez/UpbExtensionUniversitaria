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
  });
