describe('Controller: ProductCategoryController', function() {
	//Instantiate a new version of my module before each test
	beforeEach(module('ProductCategoryApp'));
	
	var ctrl, mockBackend;
	
	// Before each unit test, instantiate a new instance
	// of the controller
	beforeEach(inject(function($controller, $httpBackend) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/category/list').respond({categoryList: [{id: 1, name: 'Vitamin'},
		                                                                {id: 2, name: 'Chia Seeds'}]});
		ctrl = $controller('ProductCategoryController');
		// At this point, a server request will have been made
	}));
	
	it('should load items from server', function() {
		// Initially, before the server responds,
		// the items should be empty
		expect(ctrl.categoryList).toEqual([]);
		// Simulate a server response
		mockBackend.flush();
		expect(ctrl.categoryList).toEqual([{id: 1, name: 'Vitamin'},
		                       			   {id: 2, name: 'Chia Seeds'}]);
	});
	
	afterEach(function() {
		// Ensure that all expects set on the $httpBackend
		// were actually called
		mockBackend.verifyNoOutstandingExpectation();
		// Ensure that all requests to the server
		// have actually responded (using flush())
		mockBackend.verifyNoOutstandingRequest();
	});
});