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
  self.applicant;

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

	self.update = function (applicantId) {
		$http.put()
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

  self.create = function () {
	  $http.post()
	  	.then(function() {
		    self.show();
		});
  };

}]);































