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
    controller: 'WeatherController',
    controllerAs: 'weatherController'
  });
}])

/**
 * controllers
 */
.controller('HelloController', ['$scope', function($scope) {
  // model
  $scope.hello = 'Hello World!';
}])
.controller('WelcomeController', ['$scope', function($scope) {  
  $scope.user = {
    name: '',
    surname: ''
  };

  this.send = function() {
    console.log($scope.user);
  }

}])
.controller('WeatherController', ['$scope', 'WeatherService', function($scope, WeatherService) {
  this.getWeather = function() {
    
    $scope.weather = null;    
    $scope.error = null;

    WeatherService.currentWeather($scope.city)

    // on success
    .success(function(data,status,config,headers){
      if(data.cod == 200) {
        $scope.weather = data;
        $scope.weather.formatted = JSON.stringify(data, null, 1);
      } else {
        $scope.error = data.message;
      }
    })

    // on call api error
    .error(function(data,status,config,headers){
      $scope.error = data.message;
    });  
  }
}]);
