'use strict';

angular.module('qrqApp')
  .controller('newsCtrl', function($scope, $http) {
	
	
	$scope.loadNews = function(){
		var query = new Parse.Query("news");
		query.descending("createdAt");
		query.limit(20);
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
