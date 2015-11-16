'use strict';

angular.module('qrqApp')
  .directive('lockscreen', function () {
    return {
      templateUrl: 'components/lockscreen/lockscreen.html',
      restrict: 'EA',
      controller: 'LockscreenCtrl'
    };
  });
