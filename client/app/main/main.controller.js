'use strict';

angular.module('qrqApp')
  .controller('MainCtrl', function($scope, $http) {
	
	$scope.loadNews = function(){
		var query = new Parse.Query("news");
		query.descending("createdAt");
		query.limit(10);
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.news = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	
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
	$scope.loadNews();


  });
