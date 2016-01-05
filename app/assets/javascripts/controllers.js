'use strict';
var autopairControllers = angular.module('autopairControllers', []);

autopairControllers.controller('IndexController', [function() {

}]);

autopairControllers.controller('ApplicantController', ['$http', '$location', function($http, $location) {
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
		    $location.path('/applicants');
		});
  };

  self.chosenApplicant = function (applicant) {
  	self.currentApplicant = applicant;
  	console.log(applicant);
  };


	self.update = function (id) {
		var data = {
			name: self.name,
			email: self.email
		};
		console.log(data);

		$http.put("localhost:3000/#/applicants/{$scope.applicant.id}", data)
		  .then(function(response) {
		console.log(response);

		    self.resultPut = response;
		    $location.path('/applicants');
		});
  };

  self.delete = function (applicantId) {
		$http.delete(self.path + '/' + applicantId)
			.then(function() {
		    self.show();
		});
  };
}]);

autopairControllers.controller('TestController', [function() {

}]);

autopairControllers.controller('QuestionController', [ function() {

}]);































