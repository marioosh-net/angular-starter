'use strict';

angular.module('app',[
	'ngRoute',
	'ui.router', /* State-based routing for AngularJS */
	'mainModule',
	'mapsModule'
])
.config(['$urlRouterProvider', function($urlRouterProvider) {
	// when no route match found 
	$urlRouterProvider.otherwise('/hello');

	// the same using function
	if(false) // off
	$urlRouterProvider.otherwise(function($injector, $location){
		// $location.path('/hello');
		return 'hello';
    });
}])
.run(['$rootScope', function($rootScope){
	// when all modules loaded
	$rootScope.title = 'Angular Starter';
}]);