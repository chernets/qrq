'use strict';

angular.module('qrqApp')
  .controller('LockscreenCtrl', function ($scope,$timeout) {
	  


	  $scope.lockScreen = function(){
		  $scope.lockscreen_active = false;
		  
			var idleTimer = null;
			var idleState = false;
			var  idleWait = 300000;
			
		  $(document).bind('mousemove keydown scroll', function(){
				$timeout.cancel(idleTimer); // отменяем прежний временной отрезок
				if(idleState == true){ 
				   $scope.lockscreen_active = false;
				}
				idleState = false;
				idleTimer = $timeout(function(){ 
				  $scope.lockscreen_active = true;
				  idleState = true; 
				}, idleWait);
				
			  $scope.$apply();
		  });
	  }
	  $scope.lockScreen();

     });  
