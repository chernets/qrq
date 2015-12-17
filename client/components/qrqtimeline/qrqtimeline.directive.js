'use strict';

angular.module('qrqApp')
  .directive('qrqtimeline', function () {
    return {
      templateUrl: 'components/qrqtimeline/qrqtimeline.html',
      restrict: 'E',
      controller: 'qrqtimelineCtrl'
    };
  });
