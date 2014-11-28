'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PostsCtrl', function ($scope,post) {
    $scope.moduleName = "Posts";
    $scope.posts = [];
   	$scope.post = {url: 'http://', title: ''};

   	$scope.submitPost = function () {
   		post.save($scope.post,function(response){

   			$scope.posts[response.name] = $scope.post;
   			$scope.post = {url: 'http://', title: ''};
   			console.debug($scope.posts)
   			
   		});
	    
	    //$scope.posts.push($scope.post);
	    
   	};

   	$scope.deletePost = function (postId) {
   		post.delete({id: postId}, function () {
			delete $scope.posts[postId];
		});
	  	//$scope.posts.splice(postId, 1);
	};

	$scope.$watch('posts',function(x){
		console.debug(x)
	})
	
  });
