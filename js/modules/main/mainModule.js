'use strict';

angular.module('app.main.const',[])
.constant('VIEWS_PATH', 'js/modules/main/views');

angular.module('mainModule', ['app.main.controllers', 'app.main.services']);