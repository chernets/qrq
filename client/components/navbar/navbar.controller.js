'use strict';

angular.module('qrqApp')
  .controller('NavbarCtrl', function ($scope, Fullscreen) {
	$scope.user = Parse.User.current();
	
   $scope.goFullscreen = function () {

      if (Fullscreen.isEnabled())
         Fullscreen.cancel();
      else
         Fullscreen.all();

      // Set Fullscreen to a specific element (bad practice)
      // Fullscreen.enable( document.getElementById('img') )

   }
  });
