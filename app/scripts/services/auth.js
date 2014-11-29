'use strict';

/**
 * @ngdoc service
 * @name angNewsApp.auth
 * @description
 * # auth
 * Factory in the angNewsApp.
 */
angular.module('angNewsApp')
  .factory('auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope, $firebase) {
    var ref = new Firebase(FIREBASE_URL);
    var authCall = $firebaseSimpleLogin(ref);

    var Auth = {
      register: function (user) {
        return authCall.$createUser(user.email, user.password);
      },
      createProfile: function (user) {
        var profile = {
          username: user.username,
          md5_hash: user.md5_hash
        };

        var profileRef = $firebase(ref.child('profile'));
        return profileRef.$set(user.uid, profile);
      },
      login: function (user) {
        console.debug(user)
        return authCall.$login('password', user);
      },
      logout: function () {
        authCall.$logout();
      },
      resolveUser: function() {
        return authCall.$getCurrentUser();
      },
      signedIn: function() {
        return !!Auth.user.provider;
      },
      user: {}
    };

    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      console.debug('logged IN');      
      angular.copy(user, Auth.user);
      Auth.user.profile = $firebase(ref.child('profile').child(Auth.user.uid)).$asObject();

    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
      console.debug('logged OUT');
      if(Auth.user && Auth.user.profile) {
        Auth.user.profile.$destroy();
      }
      angular.copy({}, Auth.user);
    });

    return Auth;
  });
