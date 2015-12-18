var autopairApp = angular.module('autopairApp', ['ngRoute', 'templates', 'ngResource', 'autopairControllers']);

autopairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/questions', {
        templateUrl: 'questions.html',
        controller: 'questionsController'
      }).
      when('/', {
        templateUrl: 'index.html',
        controller: 'indexController'
      }).
      when('/programming', {
        templateUrl: 'programming.html',
        controller: 'ProgrammingController'
      }).
      when('/multiple-choice', {
        templateUrl: 'multipleChoice.html',
        controller: 'MultipleChoiceController'
      }).
      when('/add-test', {
        templateUrl: 'addTest.html',
        controller: 'AddTestController'
      }).
      when('/applicants', {
        templateUrl: 'viewApplicants.html',
        controller: 'ApplicantController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
