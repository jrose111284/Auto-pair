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
	    console.log(self.applicants);
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
	  $http.post(self.path, data)
	  	.then(function() {
		    self.show();
		    $location.path('/applicants');
		});
  };

	self.update = function (data, id) {
		$http.put(self.path + '/' + id, data)
		  .then(function(response) {
		    self.resultPut = response;
		    $location.path('/applicants');
		});
  };

  self.delete = function (id) {
		$http.delete(self.path + '/' + id)
			.then(function() {
		    self.show();
		});
  };
}]);

autopairControllers.controller('TestController', ['$http', '$location', function($http, $location) {
  var self = this;
  self.path = 'http://localhost:3000/tests';

  $http.get(self.path)
	  .then( function (response) {
	    self.tests = response.data.tests;
	});

	self.show = function () {
		$http.get(self.path)
		  .then(function (response) {
		    self.tests = response.data.tests;
		});
	};

	self.create = function () {
		self.show();
		$location.path('/tests');

		var data = {
			description: self.description,
			pass_score: self.pass_score
		};
	  $http.post(self.path, data)
	  	.then(function() {


		});
  };

	self.update = function (data, id) {
		$http.put(self.path + '/' + id, data)
		  .then(function(response) {
		    self.resultPut = response;
		    $location.path('/tests');

		});
  };

  self.delete = function (id) {
		$http.delete(self.path + '/' + id)
			.then(function() {
		    self.show();
		});
  };
}]);

autopairControllers.controller('QuestionController', ['$http', '$location', function($http, $location) {
	var self = this;
  self.path = 'http://localhost:3000/questions';
  self.result = '';
  self.count = 0;

  $http.get(self.path)
	  .then( function (response) {
	    self.questions = response.data.questions;
	    console.log(self.question);
	});

	self.show = function () {
		$http.get(self.path)
		  .then(function (response) {
		    self.questions = response.data.questions;
		});
	};

	self.findQuestion = function (id) {
		$http.get(self.path + '/' + id)
		  .then(function (response) {
		    self.question = response.data.question;
		    console.log(self.question);
		});
	};

	self.create = function () {
		var data = {
			question_text: self.question_text,
			rspec_test: self.rspec_test
		};
	  $http.post(self.path, data)
	  	.then(function() {
		    self.show();
		    $location.path('/questions');
		});
  };

	self.update = function (data, id) {
		$http.put(self.path + '/' + id, data)
		  .then(function(response) {
		    self.resultPut = response;
		    $location.path('/questions');
		});
  };

  self.delete = function (id) {
		$http.delete(self.path + '/' + id)
			.then(function() {
		    self.show();
		});
  };

  self.try = function () {
  	self.count += 1;
  	if (self.count < 3) {
  		self.result = "Try again!";
  	} else {
  		self.result = "Well done!";
  	}
  };

  self.try1 = function () {
    self.result = "Well done!";
  };

  self.try2 = function () {
    self.count += 1;
    if (self.count < 2) {
      self.result = "Try again!";
    } else {
      self.result = "Well done!";
    }
  };


 	self.submit = function () {
		$location.path('/final');
 	};

  self.submit1 = function () {
    $location.path('/questions/2');
  };

    self.submit2 = function () {
    $location.path('/questions/3');
  };
}]);
