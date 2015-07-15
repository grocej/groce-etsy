(function() {
  'use strict';
    angular
      .module('betsy')
<<<<<<< HEAD
      .controller('MainController', function ($scope, ItemListService, $routeParams) {

        ItemListService.getAllItems().then(function(items) {
          $scope.items = items;
          console.log($scope.items);
      })

      //   $scope.setOrder = function (order) {
      //     $scope.order = order;
      //     console.log($scope.order);
      // };

  });
}());


// .controller('SingleItemController', function ($scope, SingleItemService) {
//   SingleItemService.getShoppingList().then(function(data) {
//     $scope.items = data.data.results.listing_id;
//     console.log($scope.items);
//
//   }),
// },

  //Calvin's examples...
// .controller('PhotoController', function ($scope, PhotoService, $routeParams) {
//     PhotoService.getPhotos().then(function (photos) {
//
//       $scope.photos = photos;
//     });
//     if($routeParams.photoId) {
//     PhotoService.getPhoto($routeParams.photoId).then(function (photo) {
//       $scope.photo = photo;
//     });
//     }
//
//   });
// //.controller('LikesController', function ($scope, LikesService, $location) {
//
//     if($location.url() === '/likes') {
//       LikesService.getLikes().success(function (likes) {
//         $scope.likes = likes;
//       });
//     }
//
//       $scope.addLike = function (photo) {
//         LikesService.addLike(photo);
//       };
//
//
//     });
=======
      .controller('MainController', function ($scope,ItemListService) {
        ItemListService.getShoppingCart().then(function(data) {
          $scope.items = data.data.results;
          console.log($scope.items);
        });
      });
}());
>>>>>>> 5130b3598ca97f4f2ea76e5c4cd8913401abf019
