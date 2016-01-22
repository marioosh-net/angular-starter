'use strict';

angular.module('app',[
	'ngRoute',
	'mainModule'
])
.config(['$routeProvider', function($routeProvider) {
	// when no route match found 
	$routeProvider.otherwise({redirectTo: '/hello'});
}])
.run(function($rootScope){
	// when all modules loaded
	$rootScope.title = 'Angular Starter';
});