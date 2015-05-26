// app.js
// create angular app
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: 'home.html',
              controller: 'myController'
          }).
          when('/home', {
              templateUrl: 'home.html',
              controller: 'myController'
          }).
          when('/about', {
              templateUrl: 'about.html',
              controller: 'aboutController'
          }).
          otherwise({
              redirectTo: '/'
          });
}]);

// create angular controller
myApp.controller('myController', function($scope) {
  
  $scope.test = "Hello this is amazing :)";  
  
});

// create angular controller
myApp.controller('aboutController', function($scope, User) {
  
  $scope.aboutData = 'About yourself and stuff';

  function activate() {
    $scope.user = User.single();
  }

  activate();

  $scope.test = function () {
    console.log($scope.user);
  };
  
});

myApp.factory('User', User);

function User() {

   var user = {
     id: 0,
     img: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
     basic_info: 'Software engineer with a passion for good products and fitness.',
     name: 'Nikola Novakovic',
     intrests: 'Code, Fitness, Food'
   };

   return {
     single: getUser,
   };

   function getUser() {
     return user;
   };
}