var autopairApp = angular.module('autopairApp', ['ngRoute', 'templates', 'ngResource', 'xeditable', 'autopairControllers']);

autopairApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

autopairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html'
      })
      .when('/final', {
        templateUrl: 'final.html'
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
        controller: 'TestController',
        controllerAs: 'testCtrl'
      })
      .when('/tests/new', {
        templateUrl: 'tests/addTest.html',
        controller: 'TestController',
        controllerAs: 'testCtrl'
      })
      .when('/questions', {
        templateUrl: 'questions/viewQuestion.html',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl'
      })
      .when('/questions/new', {
        templateUrl: 'questions/addQuestion.html',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl'
      })
      .when('/questions/:id', {
        templateUrl: 'questions/answerQuestion.html',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
