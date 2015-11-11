'use strict';

/**
 * @ngdoc overview
 * @name extensionUniversitariaPiApp
 * @description
 * # extensionUniversitariaPiApp
 *
 * Main module of the application.
 */
angular
  .module('extensionUniversitariaPiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/nuevocurso', {
        templateUrl: 'views/nuevocurso.html',
        controller: 'NuevocursoCtrl',
        controllerAs: 'nuevocurso'
      })
      .when('/listacursos', {
        templateUrl: 'views/listacursos.html',
        controller: 'ListacursosCtrl',
        controllerAs: 'listacursos'
      })
      .when('/perfilP', {
        templateUrl: 'views/perfilp.html',
        controller: 'PerfilpCtrl',
        controllerAs: 'perfilP'
      })
      .when('/registroInst', {
        templateUrl: 'views/registroinst.html',
        controller: 'RegistroinstCtrl',
        controllerAs: 'registroInst'
      })
      .when('/perfili', {
        templateUrl: 'views/perfili.html',
        controller: 'PerfiliCtrl',
        controllerAs: 'perfili'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
