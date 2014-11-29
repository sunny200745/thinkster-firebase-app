'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('NavCtrl', function ($scope, post, $location, auth) {
    	$scope.moduleName = "Nav";

    	$scope.signedIn = auth.signedIn;
		$scope.logout = auth.logout;

    	$scope.post = {url: 'http://', title: ''};


    	$scope.user = auth.user;

	  	$scope.submitPost = function () {
		    $scope.post.creator = $scope.user.profile.username;
			$scope.post.creatorUID = $scope.user.uid;
			post.create($scope.post).then(function (response) {
				$location.path('/posts/' + response.name());
				$scope.post = {url: 'http://', title: ''};
			});
	  	};
  });
