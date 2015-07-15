(function() {
  'use strict';
  angular
    .module('betsy', [
<<<<<<< HEAD
     'ngRoute',
     'underscore'
=======
     'ngRoute'
>>>>>>> 5130b3598ca97f4f2ea76e5c4cd8913401abf019
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

<<<<<<< HEAD
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });

=======
    
>>>>>>> 5130b3598ca97f4f2ea76e5c4cd8913401abf019

}());
