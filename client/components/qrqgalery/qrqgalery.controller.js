'use strict';

angular.module('qrqApp')
  .controller('qrqgaleryCtrl', function($scope,$modal, $http) {
	  
	var skip = 0;
	var limit = $scope.newslimit;
	$scope.news = [];
	$scope.loadNews = function(i){
		var query = new Parse.Query("news");
		query.descending("createdAt");
		query.include("autor_of_news");
		query.limit(limit);
		query.skip(skip);
		query.find({
			success: function(results) {
				for(var i =0; i<results.length; i++){
					$scope.news.push(results[i])
				}								
			},
			error: function(error) {
				console.log(error);
			}
		});
	}

	$scope.loadNews();
	
	$scope.getMoreNews = function(){
		skip += limit;
		console.log(skip);
		$scope.loadNews(skip);
		
	}
	
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
								  size: 'lg_supa',
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