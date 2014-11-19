'use strict';

/**
 * @ngdoc overview
 * @name td8App
 * @description
 * # td8App
 *
 * Main module of the application.
 */
angular
  .module('td8App', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'td8AppServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
