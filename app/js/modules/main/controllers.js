'use strict';

angular.module('app.main.controllers', [])

/**
 * routes
 */
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hello', {
    templateUrl: 'views/hello.html',
    controller: 'HelloController',
    controllerAs: 'helloController'
  })
  .when('/welcome', {
    templateUrl: 'views/welcome.html',
    controller: 'WelcomeController'
  })
  .when('/weather', {
    templateUrl: 'views/weather.html',
    controller: 'WeatherController'    
  });
}])

/**
 * controllers
 */
.controller('HelloController', ['$scope', function($scope) {

  // model
  $scope.hello = 'Hello World!';
  $scope.user = {
    name: '',
    surname: ''
  };

  this.send = function() {
    console.log($scope.user);
  }
}])
.controller('WelcomeController', ['$scope', function($scope) {
  $scope.welcome = 'Welcome!!';
}])
.controller('WeatherController', ['$scope', 'WeatherService', function($scope, WeatherService) {
  console.log('WeatherController');
  WeatherService.currentWeather();
}]);
