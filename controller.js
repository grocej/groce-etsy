(function() {
  'use strict';
    angular
      .module('betsy')
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
