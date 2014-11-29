'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostviewCtrl
 * @description
 * # PostviewCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PostViewCtrl', function ($scope, $routeParams, post, auth) {
    $scope.moduleName = "PostView";

    console.debug($scope.moduleName)
    $scope.post = post.get($routeParams.postId);
	$scope.comments = post.comments($routeParams.postId);

	$scope.user = auth.user;
	$scope.signedIn = auth.signedIn;

    $scope.addComment = function () {
		if(!$scope.commentText || $scope.commentText === '') {
		  return;
		}

		var comment = {
		  text: $scope.commentText,
		  creator: $scope.user.profile.username,
		  creatorUID: $scope.user.uid
		};
		$scope.comments.$add(comment);

		$scope.commentText = '';
	};
	$scope.deleteComment = function (comment) {
	  $scope.comments.$remove(comment);
	};
  });
