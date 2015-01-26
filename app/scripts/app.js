'use strict';

/**
 * @ngdoc overview
 * @name metronicadmin3angularjsprototypestarterkitApp
 * @description
 * # metronicadmin3angularjsprototypestarterkitApp
 *
 * Main module of the application.
 */
angular
  .module('metronicadmin3angularjsprototypestarterkitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html'
      })
      .when('/movements', {
        templateUrl: 'views/movements.html'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html'
      })
      .when('/reporting', {
        templateUrl: 'views/reporting.html'
      })
      .when('/editdelivery', {
        templateUrl: 'views/editdelivery.html'
      })
      .when('/suppliers', {
        templateUrl: 'views/suppliers.html'
      })
      .when('/products', {
        templateUrl: 'views/products.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
