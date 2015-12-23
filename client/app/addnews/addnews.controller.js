'use strict';

angular.module('qrqApp')
  .controller('addnewsCtrl', function($scope, Upload, $http,$state) {
	  
	var currentUser = Parse.User.current();
	var name = "image";
	
		$scope.myImage='';
		$scope.myCroppedImage='';

		$scope.handleFileSelect = function(evt) {
		  var file=evt.files[0];
		  var reader = new FileReader();
		  reader.onload = function (e) {
			$scope.$apply(function($scope){
				$scope.myImage=e.target.result;
				$scope.newsadd.image = $scope.myCroppedImage;
			});
		  };
		  reader.readAsDataURL(file);
		};	
	
		$scope.mainform = {};
		
      $scope.update = function(newsadd) {
        $scope.mainform = angular.copy(newsadd);
		
		var news_add = $scope.newsadd;
		if(news_add != null){
			var Post = Parse.Object.extend("User_Posts");

			var UserPost = new Post();
			UserPost.set("user_post_text", news_add.text);
			
			
			var parseFile = new Parse.File(name, { base64:news_add.image} , "image/png");
			UserPost.set("user_post_file", parseFile);
			
			
			
			UserPost.set("user_post_owner", currentUser);
			/*var relation = UserPost.relation("user_post_owner");
			console.log(currentUser.id);
			relation.add("JOlJkVieh9");
			*/
			
			
			/* Подмена пользователя
			var query = new Parse.Query(Parse.User);
			query.equalTo("objectId", "RoFr0DzpTI");  // find all the women
			query.find({
			  success: function(etot) {
				relation.add(etot);
			  }
			});
			*/
			

			
			
			
			UserPost.set("user_post_likes", 0);
			UserPost.save(null, {
			  success: function(UserPost) {
				alert('Все успешно кончилось');
				$state.go('main');
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
