(function(window, angular, undefined){

	'use strict';

	angular.module('todoApp').controller('TodoItemController', TodoItemController)

	TodoItemController.$inject = ['todoListHelperService'];

	function TodoItemController(todoListHelperService){
		var todoItem = this;
		todoItem.crud = todoListHelperService;
	}
})(window, window.angular);