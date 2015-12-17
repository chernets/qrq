'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'app/timeline/timeline.html',
        controller: 'TimelineCtrl'
      });
  });
