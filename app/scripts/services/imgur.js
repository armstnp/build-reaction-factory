'use strict';

app.factory('Imgur', function($http, SUCCESS_ALBUM_ID, FAILURE_ALBUM_ID, IMGUR_CLIENT_ID){
	var album = 'https://api.imgur.com/3/album/';

	var getRandomFromAlbum = function(albumId){
		return $http({
			method: 'GET',
			url: album + albumId,
			headers: {
				'Authorization': 'Client-ID ' + IMGUR_CLIENT_ID
			}
		});
	};

	return {
		getRandomSuccess: function(callback){
			return getRandomFromAlbum(SUCCESS_ALBUM_ID, callback);
		},
		getRandomFailure: function(callback){
			return getRandomFromAlbum(FAILURE_ALBUM_ID, callback);
		}
	};
});