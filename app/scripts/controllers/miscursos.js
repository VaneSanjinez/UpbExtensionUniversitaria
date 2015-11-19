'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:MiscursosCtrl
 * @description
 * # MiscursosCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('MiscursosCtrl', function ($scope,$http,$routeParams) {
    
    alert($routeParams.codigo);
    $scope.cursos = [];  
    var where = " WHERE Organizador = '" + $routeParams.codigo + "'";
    var filtro = {
    	WHERE: where 
    }
    $http.post("select/cursos",filtro).success(function(data){
    	$scope.cursos = data;
    	alert("Exito");
    });

    $scope.mostrar = function(codigo){
      $scope.tusSeguidores = [];  
      $scope.usuarios = []
      var where = " WHERE CodigoCurso = " + codigo;
      var filtro = {
        WHERE: where 
      }
      alert(where);
      $http.post("select/cursousuariop",filtro).success(function(data){
        if (data.length == 0){
            alert("No Tiene Seguidores")
        }else{
        	$scope.tusSeguidores = data;
        	var where = " WHERE CodigoUsuarioP = " + $scope.tusSeguidores[0].CodigoUsuarioP;
	        for (var i = 1; i < $scope.tusSeguidores.length; i++) {
	           where += " OR CodigoUsuarioP = '" + $scope.tusSeguidores[i].CodigoUsuarioP + "'"  
	        };
	        alert(where);
	        var filtro = {
	           WHERE: where 
	        }
	        $http.post("select/usuariop",filtro).success(function(data){
	        	$scope.usuarios = data;
	        });   	
        }
            
      });
    
    }


  });
