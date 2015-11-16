'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('userpage', {
        url: '/userpage?id',
        templateUrl: 'app/userpage/userpage.html',
        controller: 'userpageCtrl'
      });
  });
