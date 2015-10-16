'use strict';

angular.module('qrqApp')
  .controller('MainCtrl', function($scope,$modal, $http) {
	$scope.near_quests = function(){
		var query = new Parse.Query("Quest");
		query.descending("time_begin");
		query.limit(3);
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.n_quests = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	$scope.near_quests();

	});
	
	
	