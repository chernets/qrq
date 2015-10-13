'use strict';

angular.module('qrqApp')
  .controller('addnewsCtrl', function($scope, $http, $rootScope) {
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
