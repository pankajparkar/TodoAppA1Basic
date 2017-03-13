(function(window, angular, undefined){

	'use strict';

	angular.module('todoApp').component('mainApp', {
		templateUrl: '/app/app.component.html',
		controller: 'MainAppController',
		controllerAs: 'main'
	})
})(window, window.angular);