'use strict';

/**
 * @ngdoc service
 * @name angNewsApp.post
 * @description
 * # post
 * Factory in the angNewsApp.
 */
angular.module('angNewsApp')
  .factory('post', function ($resource) {
    // Service logic
   
    // Public API here
    return $resource('https://sweltering-fire-6232.firebaseio.com/posts/:id.json');
    
  });
