'use strict';

var gruntUIApp = angular.module('gruntUIApp', [])
  .controller('NavigationItemsCtrl', function($scope, $http){
    $http.get('app/json/navigationItems.json').then(function(navigationItemsResponse) {
      $scope.navigationItems = navigationItemsResponse.data;
    });
  });