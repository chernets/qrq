'use strict';

angular.module('qrqApp')
  .controller('LockscreenCtrl', function ($scope,$timeout) {

            
                 


	  $scope.lockScreen = function(){
		  $scope.lockscreen_active = false;
		  
			var idleTimer = null;
			var idleState = false;
			var  idleWait = 60000;
			
		  $(document).bind('mousemove keydown scroll', function(){
				$timeout.cancel(idleTimer); // отменяем прежний временной отрезок
				if(idleState == true){ 
				   $scope.lockscreen_active = false;
				}
				idleState = false;
				idleTimer = $timeout(function(){ 
				
					var math = Math.floor((Math.random()*6)+1);
					$scope.lockscreen_information = [];
					var API_KEY = '1752157-91fd5b42b8b27bb023e6c9595';
					var URL = "https://pixabay.com/api/?key="+API_KEY+"&q=blur&page=" + math + "&per_page=5&min_width=1920";
					$.getJSON(URL, function(data){
						$.each(data.hits, function(i, hit){
								$scope.$apply(function() {
									$scope.lockscreen_information[i] = hit;
								});
							});
					});
				
				  $scope.lockscreen_active = true;
				  idleState = true; 
				}, idleWait);
				
			  $scope.$apply();
		  });
          
          

	  }
	  $scope.lockScreen();

     });  
