'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:AutentificacionCtrl
 * @description
 * # AutentificacionCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('AutentificacionCtrl', function ($scope,$http) {
    
  	$scope.verificar = function(){
  		
  		$scope.usuario = [];
  		alert($scope.usuario.length)
  		var where = " WHERE Username = '" + $scope.username + "'";
  		where += " AND Password = '"+ $scope.password + "'";
        var filtro = {
            WHERE: where 
        }
  		$http.post("select/usuariop",filtro).success(function(data){
      	
      		$scope.usuario = data[0];
      		if(data.length != 0){
      			alert("Consulta UsuarioP exitosa")
      			alert($scope.usuario.Nombre)
      		}else{
      			$http.post("select/usuarioi",filtro).success(function(data){
      				$scope.usuario = data[0];
      				if(data.length != 0){
		      			alert("Consulta UsuarioI exitosa")
		      			alert($scope.usuario.Nombre)
		      		}else{
		      			alert("Username o Password Incorrecto")
		      		}	
      			});
      		}
      		
    	});

  	}

  });
