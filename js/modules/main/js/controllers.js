'use strict';

angular.module('app.main.controllers', ['app.main.const'])
.config(['$routeProvider', 'VIEWS_PATH', function($routeProvider, VIEWS_PATH) {
  $routeProvider.when('/hello', {
    templateUrl: VIEWS_PATH+'/hello.html',
    controller: 'HelloController'
  })
  .when('/welcome', {
    templateUrl: VIEWS_PATH+'/welcome.html',
    controller: 'WelcomeController'
  });
}])
.controller('HelloController', function($scope) {
  $scope.hello = 'Hello World!';
})
.controller('WelcomeController', function($scope) {
  $scope.welcome = 'Welcome!!';
});
