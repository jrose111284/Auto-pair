var autopairControllers = angular.module('autopairControllers', []);

autopairControllers.controller('questionsController', [ function() {

}]);

autopairControllers.controller('indexController', ['$http', function($http) {
  var self = this;
  $http.get("http://localhost:3000/applicants")
  .then(function (response) {
    self.applicants = response.data.applicants;
  });
}]);
 condole.log(self.applicants);
autopairControllers.controller('MultipleChoiceController', [function() {

}]);

autopairControllers.controller('ProgrammingController', [function() {

}]);

autopairControllers.controller('AddTestController', [function() {

}]);

autopairControllers.controller('ApplicantController', [ function() {

}]);






























