(function() {
  'use strict';
    angular
      .module('betsy')
      .controller('MainController', function ($scope,ItemListService) {
        ItemListService.getShoppingCart().then(function(data) {
          $scope.items = data.data.results;
          console.log($scope.items);
        });
      });
}());
