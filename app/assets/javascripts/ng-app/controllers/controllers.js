var autopairControllers = angular.module('autopairApp', []);

autopairControllers.controller('QuestionsController', function ($scope) {
  $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
});