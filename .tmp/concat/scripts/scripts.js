/* global app:true */
'use strict';
var app = angular.module('buildReactionFactoryApp', ['ngRoute']);
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]).constant('SUCCESS_ALBUM_ID', 'rHuts').constant('FAILURE_ALBUM_ID', 'JIARx').constant('IMGUR_CLIENT_ID', '4d9c070bed021ed');
'use strict';
app.controller('MainCtrl', [
  '$scope',
  'Imgur',
  function ($scope, Imgur) {
    $scope.imageUrl = null;
    console.log($scope);
    var setImageUrl = function (returnObject) {
      var album = returnObject.data;
      var image = album.images[Math.floor(Math.random() * album.images_count)];
      $scope.imageUrl = image.link;
    };
    $scope.getSuccess = function () {
      Imgur.getRandomSuccess().success(setImageUrl);
    };
    $scope.getFailure = function () {
      Imgur.getRandomFailure(setImageUrl).success(setImageUrl);
    };
  }
]);
'use strict';
app.factory('Imgur', [
  '$http',
  'SUCCESS_ALBUM_ID',
  'FAILURE_ALBUM_ID',
  'IMGUR_CLIENT_ID',
  function ($http, SUCCESS_ALBUM_ID, FAILURE_ALBUM_ID, IMGUR_CLIENT_ID) {
    var album = 'https://api.imgur.com/3/album/';
    var getRandomFromAlbum = function (albumId) {
      return $http({
        method: 'GET',
        url: album + albumId,
        headers: { 'Authorization': 'Client-ID ' + IMGUR_CLIENT_ID }
      });
    };
    return {
      getRandomSuccess: function (callback) {
        return getRandomFromAlbum(SUCCESS_ALBUM_ID, callback);
      },
      getRandomFailure: function (callback) {
        return getRandomFromAlbum(FAILURE_ALBUM_ID, callback);
      }
    };
  }
]);