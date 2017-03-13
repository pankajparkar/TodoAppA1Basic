(function(window, angular, undefined){

	'use strict';

	function todoListHelperService(){
		var self = this;
		self.edit = edit;
		self.remove = remove;
		self.save = save;
		self.addSubItem = addSubItem;

		//TODO: move this from here to make this service less tightly couple 
		self.addEnable = true;

		function edit(item){ 
			self.addEnable = false;
			item.edit = true;
			return false;
		};

		function save(item){ 
			if(!item.Id) item.Id = Math.random();
			self.addEnable = true;
			item.edit = false;
			return true;
		};

		function remove(list, item){
			//TOD: delete element from array
			//Somehow get rid off $parent.$parent keywords from remove method
			self.addEnable = true;
			item.edit = false;
			if(!item.Id) {
				remove_item(list, item);
			}
		};

		function addSubItem(item){
			self.addEnable = false;
			if(!item.subItems) 
				item.subItems = [];
			item.subItems.push({ParentId: item.Id, edit: true});
		}

		function remove_item (arr, value) {
		    var b = '';
		    for (b in arr) {
		        if (arr[b] === value) {
		            arr.splice(b, 1);
		            break;
		        }
		    }
		    return arr;
		}
	};

	todoListHelperService.$inject = [];

	angular.module('todoApp').service('todoListHelperService', todoListHelperService)
})(window, window.angular);