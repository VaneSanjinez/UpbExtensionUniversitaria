'use strict';

/**
 * @ngdoc function
 * @name extensionUniversitariaPiApp.controller:ListacursosCtrl
 * @description
 * # ListacursosCtrl
 * Controller of the extensionUniversitariaPiApp
 */
angular.module('extensionUniversitariaPiApp')
  .controller('ListacursosCtrl', function ($scope,$http,$routeParams) {
  	
    alert("Parametro Enviado")
    alert($routeParams.codigo);

  	/*$scope.cursos = {};
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
    });*/
   

    $scope.cursosSugeridos = function(){
       $scope.interesesUsuario = [];  
        var where = " WHERE CodigoUsuarioP = " + $routeParams.codigo;
        var filtro = {
            WHERE: where 
         }
        $http.post("select/usuariopinteres",filtro).success(function(data){  
          $scope.interesesUsuario = data;
        
          var where = " WHERE CodigoInteres = " + $scope.interesesUsuario[0].CodigoInteres;
          for (var i = 1; i < $scope.interesesUsuario.length; i++) {
            where += " OR CodigoInteres = '" + $scope.interesesUsuario[i].CodigoInteres + "'"  
          };
          where += " GROUP BY CodigoCurso"
          alert(where);
          var filtro = {
            WHERE: where 
          }

          $scope.sugerenciasUsuario = [];          
          $http.post("select/cursointeres",filtro).success(function(data){
            $scope.sugerenciasUsuario = data;
                
                var where = " WHERE CodigoCurso = '" + $scope.sugerenciasUsuario[0].CodigoCurso + "'";
                
                for (var i = 1; i < $scope.sugerenciasUsuario.length; i++) {
                  where += " OR CodigoCurso = '" + $scope.sugerenciasUsuario[i].CodigoCurso + "'";  
                };
                alert(where);
                var filtro = {
                    WHERE: where 
                } 
                $scope.cursos = [];
                $http.post("/select/cursos",filtro).success(function(data){
                  $scope.cursos = data;
                });

          });
        });
    }

    $scope.cursosSeguidos = function(){
      $scope.interesesUsuario = [];  
      var where = " WHERE CodigoUsuarioP = " + $routeParams.codigo;
      var filtro = {
        WHERE: where 
      }
      $scope.cursosUsuario = [];
      $http.post("select/cursousuariop",filtro).success(function(data){
        $scope.cursosUsuario = data;
          var where = " WHERE CodigoCurso = " + $scope.cursosUsuario[0].CodigoCurso;
          for (var i = 1; i < $scope.cursosUsuario.length; i++) {
            where += " OR CodigoCurso = '" + $scope.cursosUsuario[i].CodigoCurso + "'"  
          };
          alert(where);
          var filtro = {
            WHERE: where 
          }
          $scope.cursos = []
          $http.post("select/cursos",filtro).success(function(data){
            $scope.cursos = data;
          });
      });  
    }

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
