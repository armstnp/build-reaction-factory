/* global app:true */

'use strict';

var app = angular.module('buildReactionFactoryApp', [
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //Inject here.
  //TODO: figure out proper environment injection for the app!
  .constant('SUCCESS_ALBUM_ID', '')
  .constant('FAILURE_ALBUM_ID', '')
  .constant('IMGUR_CLIENT_ID', '');
