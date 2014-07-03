'use strict';

var gruntUIApp = angular.module('gruntUIApp', ['ngRoute'])
  .controller('NavigationItemsCtrl', function($scope, $http){
    $http.get('app/json/navigationItems.json').then(function(navigationItemsResponse) {
      $scope.navigationItems = navigationItemsResponse.data;
    });
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/overview', { templateUrl: 'app/html/view-overview.html' })
      .when('/tasks', { templateUrl: 'app/html/view-tasks.html' })
      .when('/components', { templateUrl: 'app/html/view-components.html' })
      .when('/modules', { templateUrl: 'app/html/view-modules.html' })
      .otherwise({ redirectTo: '/' });
});