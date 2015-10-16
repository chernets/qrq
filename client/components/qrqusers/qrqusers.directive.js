'use strict';

angular.module('qrqApp')
  .directive('qrqusers', function () {
    return {
      templateUrl: 'components/qrqusers/qrqusers.html',
      restrict: 'E',
      controller: 'qrqusersCtrl',
	  scope: {
		  userslimit : "=userslimit",
		  sortby : "@sortby"
	  }
    };
  });
