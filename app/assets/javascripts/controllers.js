var autopairControllers = angular.module('autopairControllers', []);

autopairControllers.controller('questionsController', [ function() {

}]);

autopairControllers.controller('indexController', [function() {

}]);

autopairControllers.controller('MultipleChoiceController', [function() {

}]);

autopairControllers.controller('ProgrammingController', [function() {

}]);

autopairControllers.controller('AddTestController', [function() {

}]);

autopairControllers.controller('ApplicantController', ['$resource', function($resource) {
	var self = this;

	// self.applicants = [
 //    {
 //    	"id": "1",
 //      "name": "tansaku",
 //      "email": "https://avatars.githubusercontent.com/u/30216?v=3",
 //      "test_id": 1,
 //      "score": 2
 //    }, 
 //    {
 //    	"id": 2,
 //      "name": "tim",
 //      "email": "one@one.com",
 //      "test_id": 5,
 //      "score": 3
 //    }
 //  ];

  self.applicants = return $resource("app/assets/controllers/applicants_controller/applicants/:id", { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
 condole.log(self.applicants);





























