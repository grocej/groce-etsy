//url https://openapi.etsy.com/v2/listings/active.jsapi_key=ehmm61ij5mqdv16266hai2bb&callback=
//geturl .JSONP
<<<<<<< HEAD
///https://openapi.etsy.com/v2/listings/238056374.js?includes=MainImage&keywords=gamble&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK
(function () {
  'use strict';
  angular
    .module('betsy')
    .factory('ItemListService', function ($http, _) {
      //var allItemsUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=gamble&format=jsonp&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK';
      //var singleItemUrl = 'https://openapi.etsy.com/v2/listings/' + items.itemId + '.js?includes=MainImage&keywords=gamble&api_key=ehmm61ij5mqdv16266hai2bb&callback=JSON_CALLBACK';
      var objLink = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage',
        keyWord: 'gamble',
        apiKey: 'ehmm61ij5mqdv16266hai2bb',
        format: 'JSON_CALLBACK',
        newUrl: function() {
          return this.baseUrl + '&api_key=' + this.apiKey + '&keywords=' + this.keyWord + '&callback=' + this.format;
          console.log(newUrl);
      }
    };
      var mapDataToUrls = function(collection) {
        return _.map(collection, function (items) {
          console.log("test1");
          return {
            title: items.title,
            itemId: items.listing_id,
            smImg: items.MainImage.url_170x135,
            lgImg: items.MainImage.url_fullxfull,
            price: Number(items.price),
            url: items.url,
            descrip: items.description
          };
        });
      };
        var getAllItems = function() {
          return $http.jsonp(objLink.newUrl).then(function (items) {
           var itemsArray = items.data.results;
           return mapDataToUrls(itemsArray);
          });
        };
        return {
          getAllItems: getAllItems
        //getSingleItem: getSingleItem
      // mappedItem: mappedItem
      }
    })

}());

// var getSingleItem = function() {
//   return $http.jsonp(singleItemUrl).then(function (id) {
//     var gambleArray = items.data.results;
//     var narrowedArr = _.where(gambleArray, {listing_id: Number(id)});
//     return mapDataToUrls(narrowedArr)[0];
//   });
// };
=======
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
>>>>>>> 5130b3598ca97f4f2ea76e5c4cd8913401abf019
