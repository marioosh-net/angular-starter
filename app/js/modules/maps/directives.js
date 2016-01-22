'use strict';

angular.module('app.maps.directives', [])

.directive('googleMaps', ['GOOGLE_MAPS_API_KEY', '$sce', function(GOOGLE_MAPS_API_KEY, $sce){
	return {
		scope: {
    		height: '@height',
        	width: '@width',
        	lat: '@lat',
        	lon: '@lon'
		},
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		templateUrl: 'views/google-maps.html',
        link: function(scope, elem, attrs) {
        	var f = function(value){
        		console.log(value);
        		scope.src = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/view?center='+scope.lat+','+scope.lon+'&zoom=10&key='+GOOGLE_MAPS_API_KEY);
        	};
        	scope.$watch('lat', f);
        	scope.$watch('lon', f);        	
        }
	};	
}])
.value('GOOGLE_MAPS_API_KEY', 'AIzaSyC1WrNUv4iF_ay6EiohLYa34KnXz1mMIB8');