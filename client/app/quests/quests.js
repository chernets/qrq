'use strict';

angular.module('qrqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('quests', {
        url: '/quests',
        templateUrl: 'app/quests/quests.html',
        controller: 'QuestsCtrl'
      });
  });
