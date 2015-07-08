(function() {
  'use strict';
  angular
    .module('betsy', [
     'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/currentCart', {
          templateUrl: 'views/myCart.html',
          controller: 'ItemController'
        })
        .when('/:itemId', {
          templateUrl: 'views/itemDetail.html',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });

    

}());
