'use strict';

angular.module('qrqApp')
  .controller('ActiveqrqCtrl', function($scope, $http) {
	$scope.loadUsers = function(){
		var query = new Parse.Query("User");
		query.descending("createdAt");
		query.limit(10);
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.user = results;
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
		query.get("xnF2T8yPul", {
			success: function(one_quest) {
				console.log(one_quest)
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
