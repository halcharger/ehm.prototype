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
      .when('/deliveries', {
        templateUrl: 'views/deliveries.html',
        controller: 'DeliveriesController'
      })
      .when('/returns', {
        templateUrl: 'views/returns.html',
        controller: 'ReturnsController'
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
      .when('/editreturn', {
        templateUrl: 'views/editreturn.html'
      })
      .when('/suppliers', {
        templateUrl: 'views/suppliers.html'
      })
      .when('/products', {
        templateUrl: 'views/products.html'
      })
      .when('/deletedelivery', {
        templateUrl: 'views/deletedelivery.html'
      })
      .when('/deletereturn', {
        templateUrl: 'views/deletereturn.html'
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
      .when('/configureproject', {
        templateUrl: 'views/project.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
