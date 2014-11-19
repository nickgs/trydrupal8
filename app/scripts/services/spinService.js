'use strict';

var td8App = angular.module('td8AppServices',[]);

td8App.factory('spinService', ['$http',
  function ($http) {
    var spinPromise = function() {
      return $http.get('http://ravel.stackstarter.io/backend/spin.php').then(function(data) {
        return data.data;
      });
    }

  return {
    spinInstance: spinPromise
  }
}]);
