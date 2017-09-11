var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/higherEd", {
        templateUrl : "education.html"
    })
    .when("/politics", {
        templateUrl : "politics.html"
    })
    .when("/health", {
        templateUrl : "health.html"
      })
      .when("/film&tv", {
          templateUrl : "filmtv.html"
        })
        .when("/sport", {
            templateUrl : "sport.html"
          })
            .otherwise({ redirectTo: '/' });
        }]);
