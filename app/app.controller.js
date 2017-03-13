(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('MainAppController', MainAppController)

	MainAppController.$inject = [];

	function MainAppController(){
		var main = this;
		main.addEnable = true;
		main.editEnable = false;
		main.changeAddEnabled = changeAddEnabled;
		main.changeEditEnabled = changeEditEnabled;
		main.list = [];


		for(var i=0; i< 3;i++){
			main.list.push({Id: Math.random(), Name: 'Test '+ (i+1)});
		}

		function changeAddEnabled(item) { 
			console.log(item)
		}
		function changeEditEnabled() { 
			console.log(item)
		}

	}
})(window, window.angular);