/* global app:true */

'use strict';

var app = angular.module('buildReactionFactoryApp', [
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //Inject here.
  //TODO: figure out proper environment injection for the app!
  .constant('SUCCESS_REACTIONS', {
    albumId: 'rHuts',
    phrases: [
      'Nice build!',
      ':)',
      'Impressive.',
      'Hey, you pulled it off!',
      'Still as stable as stone.'
    ]
  })
  .constant('FAILURE_REACTIONS', {
    albumId: 'JIARx',
    phrases: [
      ':(',
      'That\'s too bad...',
      'you tried',
      'There, there; you can always push a fix.',
      'Yikes, didn\'t expect that!'
    ]
  })
  .constant('IMGUR_CLIENT_ID', '');
