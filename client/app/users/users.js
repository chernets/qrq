'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl'
      });
  });
