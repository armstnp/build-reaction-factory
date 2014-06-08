'use strict';

app.controller('MainCtrl', function ($scope, Imgur, SUCCESS_REACTIONS, FAILURE_REACTIONS) {
    $scope.imageUrl = null;
	$scope.messageText = null;
	$scope.isLoading = false;
	
	var resetReaction = function(){
		$scope.imageUrl = null;
		$scope.messageText = null;
	};
	
	var setLoadingOn = function(){
		$scope.isLoading = true;
	};
	
	var setLoadingOff = function(){
		$scope.isLoading = false;
	};
	
	var getRandomFromArray = function(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	};

	var generateReactionFrom = function(reactions){
		resetReaction();
		setLoadingOn();
		Imgur.getAlbum(reactions.albumId).success(setImageUrl(reactions)).then(setLoadingOff);
	};

    var setImageUrl = function(reactions){
		return function(returnObject){
			var album = returnObject.data;
			var image = getRandomFromArray(album.images);
			var reactionText = getRandomFromArray(reactions.phrases);
			$scope.imageUrl = image.link;
			$scope.messageText = 'Build Reaction Bot says: ' + reactionText + ' ' + image.link;
		};
	};

    $scope.getSuccess = function(){
		generateReactionFrom(SUCCESS_REACTIONS);
    };

    $scope.getFailure = function(){
		generateReactionFrom(FAILURE_REACTIONS);
    };
});
