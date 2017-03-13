(function(window, angular, undefined){

	'use strict';

	angular.module('todoApp').controller('TodoListController', TodoListController)

	TodoListController.$inject = [];

	function TodoListController(){
		var todoList = this;
	}
})(window, window.angular);