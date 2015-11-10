'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:PerfilpCtrl
 * @description
 * # PerfilpCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('PerfilpCtrl', function ($scope, $http) {

    $scope.usuariop={};
    	var where = " WHERE CodigoUsuarioP = 2";
    	var filtro = {
    	 	WHERE : where
	  }

		$http.post("select/usuariop",filtro).success(function(data){
  		$scope.usuariop = data[0];
  		});

    $scope.editar= function(){
    	$scope.perfilUsuario = "True";
    	$scope.editarDatos = "False";
    };

    $scope.guardar = function(){
      //UPDATE `upbexten`.`usuariop` SET `Rubro`='hola' WHERE `CodigoUsuarioP`='2';
      var registro = {
        Nombre:$scope.usuariop.Nombre, 
        Apellidop:$scope.usuariop.Apellidop,
        Apellidom:$scope.usuariop.Apellidom,
        Rubro:$scope.usuariop.Rubro,
        Ciudad:$scope.usuariop.Ciudad,
      };
    	$http.post("/update/usuariop/2", registro);
      
      alert("Datos actualizados");
    };


  });

