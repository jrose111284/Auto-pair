'use strict';
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

autopairControllers.controller('ApplicantController', ['$http', function($http) {
  var self = this;
  self.path = 'http://localhost:3000/applicants';

  $http.get(self.path)
	  .then( function (response) {
	    self.applicants = response.data.applicants;
	});

	self.show = function () {
		$http.get(self.path)
		  .then(function (response) {
		    self.applicants = response.data.applicants;
		});
	};

	self.create = function () {
		var data = {
			name: self.name,
			email: self.email
		};
		console.log(data);
	  $http.post(self.path, data)
	  	.then(function() {
	  		console.log(data);
		    self.show();
		});
  };

	self.update = function (data) {
		$http.put(data)
		  .then(function() {
		    self.show();
		});
  };

  self.delete = function (applicantId) {
		$http.delete(self.path + '/' + applicantId)
			.then(function() {
		    self.show();
		});
  };
}]);































