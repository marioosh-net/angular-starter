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
 * current-weather
 */
.directive('currentWeather', ['WeatherService', function(WeatherService){
	return {
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		templateUrl: 'views/weather-info.html',
		/* controller: function ($scope, $element, $attrs, $transclude) {
			WeatherService.currentWeather($attrs.city)
		    .success(function(data,status,config,headers){
		    	$scope.weather = data;
    		});			
		},*/
        link: function(scope, elem, attrs) {
            // scope - by default, a directive gets its parent's scope
			WeatherService.currentWeather(attrs.city)
		    .success(function(data,status,config,headers){
		    	scope.weather = data;
    		});			        	
        }
	};
}])


/**
 * current-weather
 * with isolated scope
 */
.directive('currentWeatherSafe', ['WeatherService', function(WeatherService){
	return {
		//scope: true, // use a child scope that inherits from parent
		scope: {}, // use a new isolated scope 
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		templateUrl: 'views/weather-info.html',
        link: function(scope, elem, attrs) {
			WeatherService.currentWeather(attrs.city)
		    .success(function(data,status,config,headers){
		    	scope.weather = data;
    		});			        	
        }
	};
}]);
