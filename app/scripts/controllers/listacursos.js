'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:ListacursosCtrl
 * @description
 * # ListacursosCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('ListacursosCtrl', function ($scope,$http) {
  	
  	$scope.cursos = {};
  	var where = "";
  	var filtro = {
  			WHERE: where 
  		}
  	$http.post("select/cursos",filtro).success(function(data){
  		$scope.cursos = data;
  	});

    $scope.intereses = [];  
    var where = "";
    var filtro = {
        WHERE: where 
      }
    $http.post("select/intereses",filtro).success(function(data){
      $scope.intereses = data;
    });

  	$scope.filtrar = function(){
      
      alert($scope.filtro);
      if($scope.filtro == "Todos" && $scope.ciudad == "Todos"){
        var where = " ";
        var filtro = {
            WHERE: where 
          }
        $http.post("select/cursos",filtro).success(function(data){
          $scope.cursos = data;
        });  
      }
      else if($scope.filtro == "Todos"){
        var where = " WHERE Ciudad = '" + $scope.ciudad + "'";
        var filtro = {
            WHERE: where 
          }
        $http.post("select/cursos",filtro).success(function(data){
          $scope.cursos = data;
        });  
      }else if($scope.ciudad == "Todos"){
        $scope.cursointeres = [];  
        var where = " WHERE CodigoInteres = '" + $scope.filtro + "'";
        var filtro = {
            WHERE: where 
        }
       $http.post("select/cursointeres",filtro).success(function(data){
          $scope.cursointeres = data;
          
          alert("Armando where");
          var where = " WHERE CodigoCurso = '" + $scope.cursointeres[0].CodigoCurso + "'";
          
          for (var i = 1; i < $scope.cursointeres.length; i++) {
            where += " OR CodigoCurso = '" + $scope.cursointeres[i].CodigoCurso + "'"  
          };
          alert(where);
          var filtro = {
              WHERE: where 
          }           
          $http.post("/select/cursos",filtro).success(function(data){
            $scope.cursos = data;
          });

        });  
      }else{
        $scope.cursointeres = [];  
        var where = " WHERE CodigoInteres = '" + $scope.filtro + "'";
        var filtro = {
            WHERE: where 
        }
       $http.post("select/cursointeres",filtro).success(function(data){
          $scope.cursointeres = data;
          
          alert("Armando where");
          var where = " WHERE CodigoCurso = '" + $scope.cursointeres[0].CodigoCurso + "' AND Ciudad = '" + $scope.ciudad + "'";
          
          for (var i = 1; i < $scope.cursointeres.length; i++) {
            where += " OR CodigoCurso = '" + $scope.cursointeres[i].CodigoCurso + "' AND Ciudad = '" + $scope.ciudad + "'"  
          };
          alert(where);
          var filtro = {
              WHERE: where 
          }           
          $http.post("/select/cursos",filtro).success(function(data){
            $scope.cursos = data;
          });

        });
      }
  	};
    $scope.seguir = function(codigo){
      alert(codigo)
      var codigousuariop = 1;
      alert("error")
      var cursousuariop = {
        CodigoUsuarioP : codigousuariop,
        CodigoCurso : codigo
      };
      alert("Insertando")
      $http.post("/insert/cursousuariop",cursousuariop);
      alert("Insertado")  
    };

});
