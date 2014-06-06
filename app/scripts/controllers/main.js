'use strict';

app.controller('MainCtrl', function ($scope, Imgur) {
    $scope.imageUrl = null;

    console.log($scope);

    var setImageUrl = function(returnObject){
		var album = returnObject.data;
		var image = album.images[Math.floor(Math.random() * album.images_count)];
		$scope.imageUrl = image.link;
	};

    $scope.getSuccess = function(){
    	Imgur.getRandomSuccess().success(setImageUrl);
    };

    $scope.getFailure = function(){
    	Imgur.getRandomFailure(setImageUrl).success(setImageUrl);
    };
});
