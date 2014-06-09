'use strict';

app.controller('MainCtrl', function ($scope, Imgur, SUCCESS_REACTIONS, FAILURE_REACTIONS, INITIAL_BOT_NAME) {
	$scope.botName = INITIAL_BOT_NAME;
	$scope.messageText = null;
    $scope.imageUrl = null;
	$scope.isLoading = false;

	$scope.fullMessage = null;
	
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
			$scope.imageUrl = image.link;
			$scope.messageText = getRandomFromArray(reactions.phrases);
			$scope.calcMessage();
		};
	};

	$scope.calcMessage = function(){
		$scope.fullMessage = $scope.botName + ' says: ' + $scope.messageText + ' ' + $scope.imageUrl;
	};

    $scope.getSuccess = function(){
		generateReactionFrom(SUCCESS_REACTIONS);
    };

    $scope.getFailure = function(){
		generateReactionFrom(FAILURE_REACTIONS);
    };
});
