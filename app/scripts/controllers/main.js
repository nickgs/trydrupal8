'use strict';

/**
 * @ngdoc function
 * @name td8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the td8App
 */
angular.module('td8App')
  .controller('MainCtrl',['$scope','$timeout','spinService', function ($scope, $timeout, spinService) {

    $scope.instanceSpun = false;
    $scope.url = '';
    $scope.notLoaded = false;

    $scope.spinDrupal = function() {
      var spinPromise = spinService.spinInstance();

      //display a loader.
      $scope.notLoaded = true;

      spinPromise.then(function(result) {
        $scope.url = result.url;

        //slow it down a bit so all instance services are spun.
        $timeout(function(){
          //hide loader.
          $scope.notLoaded = false;
        }, 2500);

        $scope.instanceSpun = true;
      });
    };
  }]);
