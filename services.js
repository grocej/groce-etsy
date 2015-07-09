//url https://openapi.etsy.com/v2/listings/active.jsapi_key=ehmm61ij5mqdv16266hai2bb&callback=
//geturl .JSONP
///https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gamble&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK
(function() {
  'use strict';
  angular
    .module('betsy')
    .factory('ItemListService', function ($http) {
      var allItemsUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gamble&format=jsonp&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK';
      var mapDataToUrls = function(collection) {
        return _.map(collection, function (items){
          return {
            title: items.title,
            itemId: items.listing_id,
            smImg: items.MainImage.url_170x135,
            lgImg: items.MainImage.url_fullxfull,
            price: items.price,
            url: items.url,
            descrip: items.description
          };
        });
      };
      var getAllItems = function() {
        return $http.jsonp(allItemsUrl).then(function (items) {
          var gambleArray = items.data.results;
          return mapDataToUrls(gambleArray);
        });
      };
      var getSingleItem = function() {
        return $http.jsonp(allItemsUrl).then(function (id) {
          var gambleArray = items.data.results;
          var narrowedArr = _.where(gambleArray, {listing_id: Number(id)});
          console.log("narrowArr: ", narrowedArr);
          return mapDataToUrls(narrowedArr)[0];
        });
      };
      return {
        getAllItems: getAllItems,
        getSingleItem: getSingleItem
      // mappedItem: mappedItem
      }
    })

}());
