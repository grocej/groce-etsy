//url https://openapi.etsy.com/v2/listings/active.jsapi_key=ehmm61ij5mqdv16266hai2bb&callback=
//geturl .JSONP
///https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gamble&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK
(function() {
  'use strict';
  angular
    .module('betsy')
    .factory('ItemListService', function ($http) {

      var allItemsUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gamble&format=jsonp&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK';
      var buildImgUrl = function (obj) {

      };


      /*
      var mapDataToUrls = function (allItemsUrl) {
        return _.map(allItemsUrl);
        return $http.get(mapDataToUrls);
      };
      */

      var getShoppingCart = function() {
        return $http.jsonp(allItemsUrl);
      }

      return {
        getShoppingCart: getShoppingCart
      }

    })
}());
