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
        Telefono:$scope.usuarioi.Telefono.toString()
      };
    	$http.post("/update/usuarioi/CodigoUsuarioI/1", registro);
      
      alert("Datos actualizados");
    };

    $scope.editarPassword = function(){
      $scope.perfilUsuarioPassword = "True";
      $scope.editarDatosPassword = "True";
    }

    $scope.guardarPassword = function(){
      if($scope.usuarioi.Password == $scope.ActualPassword){
        if($scope.NuevoPassword == $scope.ConfirmarNuevoPassword){
          var registro = {
          Password:$scope.NuevoPassword, 
          };
          $http.post("/update/usuarioi/CodigoUsuarioI/2", registro);   
          alert("Datos actualizados (Password)");  
        }else{
          alert("Las Contraseñas no coinciden");
        }
      }else{
        alert("Password Incorrecto");
      }

    }

  });
