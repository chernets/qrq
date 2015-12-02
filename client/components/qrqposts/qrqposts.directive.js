'use strict';

angular.module('qrqApp')
  .directive('qrqposts', function () {
    return {
      templateUrl: 'components/qrqposts/qrqposts.html',
      restrict: 'E',
      controller: 'qrqpostsCtrl',
	  scope: {
		  newslimit : "=newslimit",
		  qrquserposts : "=qrquserposts"
	  }
    };
  });
