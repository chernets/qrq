'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('addnews', {
        url: '/addnews',
        templateUrl: 'app/addnews/addnews.html',
        controller: 'addnewsCtrl'
      });
  });
