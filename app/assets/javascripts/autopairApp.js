var autopairApp = angular.module('autopairApp', ['ngRoute', 'autopairControllers']);

autopairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/questions/new', {
        templateUrl: 'templates/questions/new.html',
        controller: 'questionsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);