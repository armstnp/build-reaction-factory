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

    var setImageUrl = function(reactions){
		return function(returnObject){
			var album = returnObject.data;
			var image = getRandomFromArray(album.images);
			$scope.imageUrl = image.link;
			$scope.messageText = "Build Reaction Bot says: " + getRandomFromArray(reactions) + " " + $scope.imageUrl;
		};
	};

    $scope.getSuccess = function(){
		resetReaction();
		setLoadingOn();
    	Imgur.getRandomSuccess().success(setImageUrl(SUCCESS_REACTIONS)).then(setLoadingOff);
    };

    $scope.getFailure = function(){
		resetReaction();
		setLoadingOn();
    	Imgur.getRandomFailure().success(setImageUrl(FAILURE_REACTIONS)).then(setLoadingOff);
    };
});
