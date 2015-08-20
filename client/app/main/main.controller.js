'use strict';

angular.module('qrqApp')
  .controller('MainCtrl', function($scope, $http) {
	$scope.bla = 1;
	
	$scope.loadNews = function(){
		var query = new Parse.Query("qrqNews");
		query.descending("createdAt");
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
	$scope.loadNews();


  });
