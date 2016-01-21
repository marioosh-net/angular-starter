'use strict';

angular.module('app.main.controllers', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hello', {
    templateUrl: 'views/hello.html',
    controller: 'HelloController'
  })
  .when('/welcome', {
    templateUrl: 'views/welcome.html',
    controller: 'WelcomeController'
  });
}])
.controller('HelloController', function($scope) {
  $scope.hello = 'Hello World!';
})
.controller('WelcomeController', function($scope) {
  $scope.welcome = 'Welcome!!';
});
