'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostviewCtrl
 * @description
 * # PostviewCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PostViewCtrl', function ($scope, $routeParams, post) {
    $scope.moduleName = "PostView";
    $scope.post = post.get($routeParams.postId);
  });
