angular.module('Tea', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'main.html'
    })
    .when('/health', {
      templateUrl: 'health.html'
    })
    .when('/health/article1', {
      templateUrl: 'health/article.html'
    })
    .when('/health/article2', {
      templateUrl: 'health/article2.html'
    })
    .when('/health/article3', {
      templateUrl: 'health/article3.html'
    })
    .when('/politics', {
      templateUrl: 'politics.html'
    })
    .when('/politics/article1', {
      templateUrl: 'politics/article.html'
    })
    .when('/politics/article2', {
      templateUrl: 'politics/article2.html'
    })
    .when('/politics/article3', {
      templateUrl: 'politics/article3.html'
    })
    .when('/filmTv', {
      templateUrl: 'filmtv.html'
    })
    .when('/filmTv/article1', {
      templateUrl: 'filmtv/article.html'
    })
    .when('/filmTv/article2', {
      templateUrl: 'filmtv/article2.html'
    })
    .when('/filmTv/article3', {
      templateUrl: 'filmtv/article3.html'
    })
    .when('/sports', {
      templateUrl: 'sport.html'
    })
    .when('/sports/article1', {
      templateUrl: 'sport/article.html'
    })
    .when('/sports/article2', {
      templateUrl: 'sport/article2.html'
    })
    .when('/sports/article3', {
      templateUrl: 'sport/article3.html'
    })
    .when('/education', {
      templateUrl: 'education.html'
    })
    .when('/education/article1', {
      templateUrl: 'education/article.html'
    })
    .when('/education/article2', {
      templateUrl: 'education/article2.html'
    })
    .when('/education/article3', {
      templateUrl: 'education/article3.html'
    })
    .otherwise({
        templateUrl : "main.html"
    });
}]);
