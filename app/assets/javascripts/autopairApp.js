var autopairApp = angular.module('autopairApp', ['ngRoute', 'templates', 'ngResource', 'xeditable', 'autopairControllers']);

autopairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'IndexController'
      })
      .when('/applicants', {
        templateUrl: 'applicants/viewApplicants.html',
        controller: 'ApplicantController',
        controllerAs: 'appCtrl'
      })
      .when('/applicants/new', {
        templateUrl: 'applicants/addApplicant.html',
        controller: 'ApplicantController',
        controllerAs: 'appCtrl'
      })
      .when('/applicants/:id', {
        templateUrl: 'applicants/detailApplicant.html',
        controller: 'ApplicantController',
        controllerAs: 'appCtrl'
      })
      .when('/tests', {
        templateUrl: 'tests/viewTests.html',
        controller: 'TestController'
      })
      .when('/tests/new', {
        templateUrl: 'addTest.html',
        controller: 'TestController'
      })
      .when('/tests/:id', {
        templateUrl: 'detailTest.html',
        controller: 'TestController'
      })
      .when('/questions', {
        templateUrl: 'questions.html',
        controller: 'QuestionController'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
