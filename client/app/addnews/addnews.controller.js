'use strict';

angular.module('qrqApp')
  .controller('addnewsCtrl', function($scope, Upload, $http) {
	  
	  
	var currentUser = Parse.User.current();
	
	
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
		
		var news_add = $scope.newsadd;
		if(news_add != null){
			var Post = Parse.Object.extend("User_Posts");

			var UserPost = new Post();
			UserPost.set("user_post_text", news_add.text);
			UserPost.set("user_post_image", news_add.image);
			UserPost.set("user_post_id", currentUser.id);
			UserPost.set("user_post_likes", "0");
			UserPost.save(null, {
			  success: function(UserPost) {
				alert('Все успешно кончилось');
			  },
			  error: function(UserPost, error) {
				alert('Упс, что-то пошло не так!',error);
			  }
			});
		}
      };

      $scope.reset = function() {
        $scope.newsadd = angular.copy($scope.mainform);
      };
      $scope.reset();
  });
