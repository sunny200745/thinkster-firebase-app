'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('AuthCtrl', function ($scope, user, auth, $location) {
		$scope.moduleName = "Auth";
		if (user) {
			$location.path('/');
		}

		$scope.login = function () {
			auth.login($scope.user).then(function () {
			  $location.path('/');
			}, function (error) {
			  $scope.error = error.toString();
			});
		};

		$scope.register = function () {
			auth.register($scope.user).then(function() {
			  return auth.login($scope.user).then(function() {
			    $location.path('/');
			  });
			}, function(error) {
			  $scope.error = error.toString();
			});
		};
  	});
