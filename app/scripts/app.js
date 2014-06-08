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
  .constant('SUCCESS_ALBUM_ID', '')
  .constant('FAILURE_ALBUM_ID', '')
  .constant('IMGUR_CLIENT_ID', '')
  .constant('SUCCESS_REACTIONS', [
	'Nice build!',
	':)',
	'Impressive.',
	'Hey, you pulled it off!',
	'Still as stable as stone.'
  ])
  .constant('FAILURE_REACTIONS', [
	':(',
	"That's too bad...",
	'you tried',
	'There, there; you can always push a fix.',
	"Yikes, didn't expect that!"
  ]);
