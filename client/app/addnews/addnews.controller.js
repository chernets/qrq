'use strict';

angular.module('qrqApp')
  .controller('addnewsCtrl', function($scope, Upload, $http, $rootScope) {
	$scope.user = Parse.User.current();
    $scope.files = function(element){
        var photofile = element.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
			$scope.$apply(function(scope) {
				$scope.newsadd.image = e.target.result;
			});
        };
        reader.readAsDataURL(photofile);
    };
	
	
	  $scope.mainform = {};
		
      $scope.update = function(newsadd) {
        $scope.mainform = angular.copy(newsadd);
		console.log($scope.newsadd);
      };

      $scope.reset = function() {
        $scope.newsadd = angular.copy($scope.mainform);
      };

      $scope.reset();
  });
