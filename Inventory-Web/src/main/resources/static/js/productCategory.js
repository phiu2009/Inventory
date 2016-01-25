var app = angular.module('ProductCategoryApp', []);

app.controller('ProductCategoryController', ['$http', function($http){
	var self = this;
	self.categoryList = [];
	self.newCategory = {};
	self.editMode = -1;
	var getCategory = function(){$http.get('/category/list').then(function(responseData){
		self.categoryList = responseData.data.categoryList;
		console.debug(self.categoryList);});
	}
	getCategory();
	
	self.submit = function(){
		console.log('User clicked submit with ', self.newCategory);
		self.categoryList.push(self.newCategory);
		add();
		self.newCategory = {};
	};
	
	self.edit = function($category){
		console.log('User clicked edit with ', $category);
		self.editMode = $category.id;
	};
	
	self.save = function($category){
		console.log('User clicked save with ', $category);
		self.editMode = -1;
		$http.post('/category/save', $category)
		.then(getCategory);
		
	};
	
	self.deleteCat = function($category){
		console.log('User clicked delete with ', $category);
//		$http.post('/category/delete', $category).then(getCategory);
		$http.delete('/category/delete/'+ $category.id).then(getCategory);
	}
	
	var add = function() {
		console.log('User clicked add with ', self.newCategory);
		$http.post('/category/add', self.newCategory)
		.then(getCategory);
	};
}]);