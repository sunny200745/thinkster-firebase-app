'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PageCtrl', function ($scope) {
    $scope.moduleName = "Page";
    console.debug("I am PAGE CONTROLLER !! EVERY ONE PARENT :)");
    	
    	
		setInterval(function(){ 
		    $('#heading').toggleClass('magictime spaceInDown');
		}, 1000 );
    
  });
