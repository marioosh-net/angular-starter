'use strict';

angular.module('app.main.controllers', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hello', {
    templateUrl: 'js/modules/main/views/hello.html',
    controller: 'HelloController'
  })
  .when('/welcome', {
    templateUrl: 'js/modules/main/views/welcome.html',
    controller: 'WelcomeController'
  });
}])
.controller('HelloController', function($scope) {
  $scope.hello = 'Hello World!';
})
.controller('WelcomeController', function($scope) {
  $scope.welcome = 'Welcome!!';
});
