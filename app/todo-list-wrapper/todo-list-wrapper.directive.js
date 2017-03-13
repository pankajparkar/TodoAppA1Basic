(function(window, angular, undefined){

	'use strict';

	angular.module('todoApp').component('todoListWrapper', [function(){
		bindToController: {
			addEnable: '<',
			editEnable: '<',
			changeAddEnabled: '&',
			changeEditEnabled: '&'
		},
		templateUrl: '/app/todo-list-wrapper/todo-list-wrapper.directive.html',
		controller: 'TodoListWrapperController',
		controllerAs: 'todoListWrapper'
	}]);
})(window, window.angular);