'use strict';

app.factory('Imgur', function($http, IMGUR_CLIENT_ID){
	var album = 'https://api.imgur.com/3/album/';

	return {
		getAlbum : function(albumId){
			return $http({
				method: 'GET',
				url: album + albumId,
				headers: {
					'Authorization': 'Client-ID ' + IMGUR_CLIENT_ID
				}
			});
		}
	};
});