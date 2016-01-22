'use strict';

angular.module('app.main.directives', ['restModule'])

/**
 * current-time
 */
.directive('currentTime', function(){
	return {
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		template: '<h5>'+new Date()+'</h5>'
	};
})

/**
 * current-
 */
.directive('currentWeatherInWarsaw', ['WeatherService', function(WeatherService){
	return {
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		templateUrl: 'views/weather-info.html',
		controller: function ($scope, $element, $attrs, $transclude) {
			WeatherService.currentWeather('Warsaw')
		    .success(function(data,status,config,headers){
		    	$scope.weather = data;
    		});			
		}
	};
}]);
