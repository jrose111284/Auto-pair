var autopairApp = angular.module('autopairApp', ['ngRoute', 'templates', 'autopairControllers']);

autopairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/questions', {
        templateUrl: 'questions.html',
        controller: 'questionsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
