// app.js
// create angular app
var myApp = angular.module('myApp', []);

// create angular controller
myApp.controller('myController', function($scope) {
  
  $scope.test = "Hello this is amazing :)";

  $scope.myData = '';
  
  
});