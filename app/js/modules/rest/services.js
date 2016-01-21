'use strict';

angular.module('app.rest.services', [])
.config(['$httpProvider', function($httpProvider) {
    //$httpProvider.defaults.headers.common.Authorization = 'Basic YWRtaW46IVplYXRvbi4xMjM=';
}])
.service('WeatherService', ['$scope', '$http', function($scope, $http) {
	console.log('WeatherService');
	this.currentWeather = function() {
	    $http.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=e320bbc901b8e628166648a3192554b0', function(s){
	        console.log(s);
	    });
	};
}]);
