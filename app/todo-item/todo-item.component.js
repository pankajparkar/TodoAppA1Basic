(function(window, angular, undefined){

	'use strict';

	angular.module('todoApp').component('todoItem', {
		bindings: {
			item: '<',
			addEnable: '<',
		},
		templateUrl: '/app/todo-item/todo-item.component.html',
		controller: 'TodoItemController',
		controllerAs: 'todoItem'
	})
})(window, window.angular);