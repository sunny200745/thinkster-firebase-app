'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PostsCtrl', function ($scope, post, $location) {
    $scope.moduleName = "Posts";
    $scope.posts = post.all;
    console.debug($scope.posts)
   	$scope.post = {url: 'http://', title: ''};

   	/*$scope.submitPost = function () {
   		post.create($scope.post).then(function (response) {
	      $scope.post = {url: 'http://', 'title': ''};
        $location.path('/posts/' + response.name());
	    });	    
   	};*/

   	$scope.deletePost = function (postData) {   		
   		post.delete(postData);
	  };
	
  });
