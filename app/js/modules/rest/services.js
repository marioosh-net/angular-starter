'use strict';

angular.module('app.rest.services', [])
.config(['$httpProvider', function($httpProvider) {
    //$httpProvider.defaults.headers.common...
}])
.service('WeatherService', ['$http', 'API_ENDPOINT', 'API_KEY', function($http, API_ENDPOINT, API_KEY) {
	this.currentWeather = function(city) {
		// return Promise object
	    return $http.get(API_ENDPOINT+'/weather',{
	    	params: {
	    		'appid': API_KEY,
	    		'units': 'metric',
	    		'q': city
	    	}
	    });
	};
}])
.value('API_ENDPOINT', 'http://api.openweathermap.org/data/2.5')
.value('API_KEY', 'fb7979b3a864ca06f840281c7384e65e');
