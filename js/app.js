'use strict';

angular.module('app',['mainModule'])
.run(function($rootScope){
	// when all modules loaded
	$rootScope.title = 'Angular Starter';
});