(function(window, angular, undefined){
	'use strict';
	
	angular.module('todoApp').controller('TodoListWrapperController', TodoListWrapperController)

	TodoListWrapperController.$inject = [];

	function TodoListWrapperController(){
		var todoItem = this;
		todoItem.save = save;
		todoItem.edit = edit;
		todoItem.remove = remove;

		function save(){}
		function edit(){}
		function remove(){}
	}
})(window, window.angular);