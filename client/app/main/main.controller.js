'use strict';

angular.module('qrqApp')
  .controller('MainCtrl', function($scope,$modal, $http) {
	
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
	$scope.near_quests = function(){
		var query = new Parse.Query("Quest");
		query.descending("time_begin");
		query.limit(2);
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
	$scope.loadNews();
	
	
	// detail modal
    $scope.open = function(itm){
		console.log(itm + "  id");   
	
		var query = new Parse.Query("news");
		query.get(itm, {
			success: function(news_det) {
				console.log(news_det);
								var modalInstance = $modal.open({
				  templateUrl: 'news_detail_modal',
					 controller: 'MainCtrlModal',
				  size: 'lg',
					  resolve: {
						news_det: function () {
							console.log(news_det);
							$scope.news_det = news_det;
							return $scope.news_det;
					 }
					}
				});
			},
			error: function(object, error) {
				console.log(error);
			}
		});
		


				    };


  });
  angular.module('qrqApp')
  .controller('MainCtrlModal', function($scope, $modalInstance, news_det) {
	  $scope.news_det = news_det;
	$scope.cancel = function () {
		
		$modalInstance.close();
	};	  
	});