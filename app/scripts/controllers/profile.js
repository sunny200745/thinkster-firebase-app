'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('ProfileCtrl', function ($scope, Profile, $routeParams) {
    $scope.moduleName = "Profile";
    var uid = $routeParams.userId;

	$scope.profile = Profile.get(uid);
	Profile.getPosts(uid).then(function(posts) {
		$scope.posts = posts;
	});
  });
