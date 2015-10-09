'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'newsCtrl'
      });
  });
