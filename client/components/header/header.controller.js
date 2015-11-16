'use strict';

angular.module('qrqApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, geolocation) {

	
	var point;
	
	/*geolocation.getLocation().then(function(data){
	  $scope.usergeopoint = [data.coords.latitude,data.coords.longitude];
	  
	  var user_geo = Parse.User.current();

	  if(user_geo){
		  point = new Parse.GeoPoint({latitude: data.coords.latitude, longitude: data.coords.longitude});
		  user_geo.set("my_position", point);
		  user_geo.save();
	  }
    });*/
	$scope.showMenu = function(){
		$rootScope.menu = !$rootScope.menu;
		return $rootScope.menu;
	}
	
	
	$scope.user = Parse.User.current();
	$scope.login = function(){
		Parse.FacebookUtils.logIn("public_profile,user_friends,user_likes,email,user_about_me", {
			success: function(user) {
				if (!user.existed()) {
					$scope.user_save();
				} else {
					location.reload(); 
				}
			},
			error: function(user, error) {

			}
		});
	}
	
	$scope.user_save = function(){	
		var user = Parse.User.current();
		FB.api("/me/picture",function (response) {
			  if (response && !response.error) {
				user.set("smoll_avatar", response.data.url)
				user.save(null, {
				  success: function(user_save) {
					//notification("Сохраняем ваш аватар","info",10);
				  },
				  error: function(user_save, error) {
					//notification("Мы не можем сохранить ваш Аватар ваш аватар","warning",10);
					document.location.reload();
				  }
				});
			  }
			}
		);
		FB.api("/me/picture?type=large",function (response) {
			  if (response && !response.error) {
				user.set("big_avatar", response.data.url)
				user.save(null, {
				  success: function(user_save) {
					//notification("Сохраняем ваш аватар","info",10);
				  },
				  error: function(user_save, error) {
					//notification("Мы не можем сохранить ваш Аватар ваш аватар","warning",10);
					document.location.reload();
				  }
				});
			  }
			}
		);
		FB.api("/me?fields=cover",function (response) {
			  if (response && !response.error) {
				user.set("cover_big_photo", response.cover.source)
				user.save(null, {
				  success: function(user_save) {
					//notification("Сохраняем ваш аватар","info",10);
				  },
				  error: function(user_save, error) {
					//notification("Мы не можем сохранить ваш Аватар ваш аватар","warning",10);
					document.location.reload();
				  }
				});
			  }
			}
		);
		FB.api('/me',{fields: 'name,last_name,first_name,birthday,currency,email,gender,hometown,location,locale,website'}, function(response) {
			user.set("username", response.name);
			user.set("link_site", response.link);
			user.set("gender", response.gender);
			user.set("first_name", response.first_name);
			user.set("hometown", response.hometown);
			user.set("last_name", response.last_name);
			user.set("birthday", response.birthday);
			user.set("facebook_id", response.id);
			user.set("email", response.email);
			user.set("location", response.location);
			user.set("locale", response.locale);
			user.set("website", response.website);
			user.save(null, {
			  success: function(user_save) {
				//notification("Сохраняем Вашы данные","info",10);
				//notification("Переходим на страничку пользователя","sucess",10);
				/*setTimeout(function(){
					document.location.href = "/user.html"
				},3000);*/
			  },
			  error: function(user_save, error) {
				//notification("Мы не можем сохранить Вашы данные","warning",10);
			  }
			});
		});

	}

	$scope.logout = function (){
		Parse.User.logOut();
		$scope.user = Parse.User.current();
	}
	
  });
