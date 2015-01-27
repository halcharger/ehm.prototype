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
  .module('EHM', [
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
        templateUrl: 'views/movements.html',
        controller: 'MovementsController'
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
      .when('/deletemovement', {
        templateUrl: 'views/deletemovement.html'
      })
      .when('/deletequote', {
        templateUrl: 'views/deletequote.html'
      })
      .when('/planning', {
        templateUrl: 'views/planning.html',
        controller: 'PlanningController'
      })
      .when('/editquote', {
        templateUrl: 'views/editquote.html'
      })
      .when('/sitebalancereportsetup', {
        templateUrl: 'views/sitebalancereportsetup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
