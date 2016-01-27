'use strict';

angular.module('app.maps.directives', [])

.directive('googleMaps', ['GOOGLE_MAPS_API_KEY', 'GOOGLE_MAPS_API_URL', '$sce', function(GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL, $sce){
	return {
		scope: { // isolated scope
    		height: '@height', // @ or @attr - bind a local scope property to the value of DOM attribute.
        	width: '@width',
        	coord: '=' // = or =attr - set up bi-directional binding between a local scope property and the parent scope property of name defined via the value of the attr attribute
		},
		restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
		replace: true, // generated template will replace the HTML element on which the directive is applied
		templateUrl: 'views/google-maps.html',
        link: function(scope, elem, attrs) {
        	scope.$watch('coord', function(value,old){
                if(value!=null&&value!='') {
                    //elem.attr('src', GOOGLE_MAPS_API_URL+'/view?center='+scope.coord.lat+','+scope.coord.lon+'&zoom=10&key='+GOOGLE_MAPS_API_KEY);
                    scope.src = $sce.trustAsResourceUrl(GOOGLE_MAPS_API_URL+'/view?center='+scope.coord.lat+','+scope.coord.lon+'&zoom=10&key='+GOOGLE_MAPS_API_KEY);
                }
            });
        }
	};	
}])

.directive('googleMapsV2', ['GOOGLE_MAPS_API_KEY', 'GOOGLE_MAPS_API_URL', '$sce', function(GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL, $sce){
    return {
        scope: { // isolated scope
            height: '@height', // @ or @attr - bind a local scope property to the value of DOM attribute.
            width: '@width',
            lat: '@',
            lon: '@'            
        },
        restrict: 'AEC', // directive can be used as an attribute, a HTML element or class.
        replace: true, // generated template will replace the HTML element on which the directive is applied
        templateUrl: 'views/google-maps.html',
        link: function(scope, elem, attrs) {
            scope.$watch('lat', function(value,old){
                if(value!=null&&value!='') {
                    scope.src = $sce.trustAsResourceUrl(GOOGLE_MAPS_API_URL+'/view?center='+scope.lat+','+scope.lon+'&zoom=10&key='+GOOGLE_MAPS_API_KEY);
                }
            });
            scope.$watch('lon', function(value,old){
                if(value!=null&&value!='') {
                    scope.src = $sce.trustAsResourceUrl(GOOGLE_MAPS_API_URL+'/view?center='+scope.lat+','+scope.lon+'&zoom=10&key='+GOOGLE_MAPS_API_KEY);
                }
            });                        
        }
    };  
}])

.value('GOOGLE_MAPS_API_URL', 'https://www.google.com/maps/embed/v1')
.value('GOOGLE_MAPS_API_KEY', 'AIzaSyC1WrNUv4iF_ay6EiohLYa34KnXz1mMIB8');