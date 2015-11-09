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

    $scope.cursos = [];
    var where = "";
    var filtro = {
        WHERE: where 
    }
    $http.post("select/cursos",filtro).success(function(data){
      $scope.cursos = data;
    });
  	
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

      alert("insertando intereses")
      for(var i = 0; i < $scope.selectionn.length; i++){
        var codigocurso = ($scope.cursos[($scope.cursos.length)-1].CodigoCurso + 1);
        var codigointeres = $scope.selectionn[i].CodigoInteres;
        var nuevoCursoInteres = {
          CodigoCurso : codigocurso.toString(),
          CodigoInteres : codigointeres.toString()
        };
        $http.post("/insert/cursointeres",nuevoCursoInteres);
      }

  	};

  	
  	

  });
