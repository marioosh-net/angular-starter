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
    controller: 'WelcomeController',
    controllerAs: 'welcomeController'
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
  .state('details', {
    url: '/details/:urlParam',
    params: {user: null}, // when need pass some data from state to state, but params are not in url (/:param1/?param2=...)
    templateUrl: 'views/details.html',
    controller: 'DetailsController'
  });
}])

/**
 * controllers
 */
.controller('HelloController', ['$scope', function($scope) {
  // model
  $scope.hello = 'Hello World!';
}])
.controller('WelcomeController', ['$scope', '$state', function($scope, $state) {  
  $scope.user = {
    name: '',
    surname: ''
  };

  this.send = function() {

    // transition to new state
    $state.go('details', 
      // object that is used to pass $stateParams to the new state
      {user: $scope.user,
        urlParam: 'This is url param'
      });
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
}])
.controller('DetailsController', ['$scope', '$stateParams', function($scope, $stateParams){
  $scope.user = $stateParams.user;
  $scope.urlParam = $stateParams.urlParam;
}]);
