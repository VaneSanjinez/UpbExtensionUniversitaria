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
      .otherwise({
        redirectTo: '/'
      });
  });
