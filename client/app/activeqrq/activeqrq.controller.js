'use strict';

angular.module('qrqApp')
  .controller('ActiveqrqCtrl', function($scope, $http) {
	  
	var quest_points_array = [];  
	  
	
	$scope.loadUsers = function(){
		var query = new Parse.Query("User");
		query.descending("createdAt");
		query.limit(10);
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.active_quest_user = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	
	$scope.loadUsers();
	
	
	$scope.one_quest = function(){
		var query = new Parse.Query("Quest");
		query.get("YfZEnq2zpS", {
			success: function(one_quest) {
				
				var oqgPoints = one_quest.get('points_of_quest');
				
				
				
				
				for( var i = 0;i < oqgPoints.length; i++ ){
					quest_points_array.push(oqgPoints[i]);
				}

				var geos = new Parse.Query("geopoints");
				geos.containedIn("objectId" , quest_points_array);
						geos.find({
							success: function(goes_results) {
								$scope.$apply(function() {
									$scope.qpa_elem = goes_results;
								})
							}
						});
				
				
				$scope.$apply(function() {
					$scope.one_quest_info = one_quest;
					
				});
			},
			error: function(object, error) {
				console.log(error);
			}
			
			
		});
		
	}
	
	$scope.one_quest();
  });
