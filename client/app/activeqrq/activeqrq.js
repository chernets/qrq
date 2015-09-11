'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('activeqrq', {
        url: '/activeqrq',
        templateUrl: 'app/activeqrq/activeqrq.html',
        controller: 'ActiveqrqCtrl'
      });
  });
