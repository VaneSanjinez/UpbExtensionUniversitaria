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

    $scope.intereses = [];  
    var where = "";
    var filtro = {
        WHERE: where 
    }
    $http.post("select/intereses",filtro).success(function(data){
      $scope.intereses = data;
    });

    $scope.selectionn = [];
    $scope.toggleSelection = function toggleSelection(interes) {
      var idx = $scope.selectionn.indexOf(interes);
      if (idx > -1) {
        $scope.selectionn.splice(idx, 1);
      }
      else {
        $scope.selectionn.push(interes);
      }
    };

    $scope.usuariosp = [];
    var where = "";
    var filtro = {
        WHERE: where 
    }
    $http.post("select/usuariop",filtro).success(function(data){
      $scope.usuariosp = data;
    });

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

      alert("insertando intereses")
      for(var i = 0; i < $scope.selectionn.length; i++){
        var codigousuario = ($scope.usuariosp[($scope.usuariosp.length)-1].CodigoUsuarioP + 1);
        var codigointeres = $scope.selectionn[i].CodigoInteres;
        var nuevoUsuariopInteres = {
          CodigoUsuarioP : codigousuario.toString(),
          CodigoInteres : codigointeres.toString()
        };
        $http.post("/insert/usuariopinteres",nuevoUsuariopInteres);
      }

  	};

  });
