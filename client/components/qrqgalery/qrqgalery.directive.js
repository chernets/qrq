'use strict';

angular.module('qrqApp')
  .directive('qrqgalery', function () {
    return {
      templateUrl: 'components/qrqgalery/qrqgalery.html',
      restrict: 'E',
      controller: 'qrqgaleryCtrl',
	  scope: {
		  newslimit : "=newslimit"/*,
		  sortby : "@sortby"*/
	  }
    };
  });
