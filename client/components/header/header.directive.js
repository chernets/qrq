'use strict';

angular.module('qrqApp')
  .directive('header', function () {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'E',
      controller: 'HeaderCtrl'
    };
  });
