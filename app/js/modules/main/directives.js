'use strict';

angular.module('app.main.directives', [])

/**
 * current-time
 */
.directive('currentTime', function(){
	return {
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		template: '<h5>'+new Date()+'</h5>'
	};
});
