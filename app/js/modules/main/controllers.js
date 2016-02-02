'use strict';

angular.module('app.main.controllers', [])

/**
 * routes
 */
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('hello', {
    url: '/hello',
    templateUrl: 'views/hello.html',
    controller: 'HelloController',
    controllerAs: 'helloController'
  })
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'views/welcome.html',
    controller: 'WelcomeController'
  })
  .state('weather', {
    url: '/weather',
    templateUrl: 'views/weather.html',
    controller: 'WeatherController',
    controllerAs: 'weatherController'
  })
  .state('states', {
    url: '/states',
    templateUrl: 'views/states.html'
  })
  .state('state1', {
    url: '/state1', // state accessible on http://..../#/state1 (href generated automatically by ui-sref attr)
    templateUrl: 'views/state1.html'
  })
  .state('state2', {
    url: '/stateTwo', // state accessible on http://..../#/stateTwo
    templateUrl: 'views/state2.html'
  })
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
