'use strict';

angular.module('qrqApp')
  .controller('qrqusersCtrl', function ($scope, $rootScope) {
	var curuser = Parse.User.current();

	$scope.loadUsers = function(){
		
		var point = new Parse.GeoPoint({latitude: 48.6785738, longitude: 26.5905205});
		
		var limit = $scope.userslimit;
		var descending_by = $scope.sortby;

		var query = new Parse.Query("User");
		query.limit(limit);
		if(descending_by){
			query.descending(descending_by); 
		}
		query.find({
			success: function(results) {
				for(var i=0; i<results.length; i++){
					results[i].show = false;
					results[i].cheakFollows = $scope.cheakFollow(results[i].id);
				}
				$scope.$apply(function() {
					$scope.qrqusers = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	
	$scope.loadUsers();
	
	$scope.addFollow = function(data){
		var newfollowers = [];
		if(curuser.get('followers')){
			newfollowers = curuser.get('followers');
			newfollowers.push(data.id);
		}else{
			newfollowers.push(data.id);
		}
		curuser.set("followers", newfollowers);
		curuser.save(null, {
			success: function(curuser) {				
				data.cheakFollows = true;
			}
		});	
	}
	
	$scope.delFollow = function(data){
		var newfollowers = [];
			for(var i=0; i<curuser.get('followers').length; i++){
				if(data.id != curuser.get('followers')[i]){
					newfollowers.push(curuser.get('followers')[i]);
				}
			}
		curuser.set("followers", newfollowers);
		curuser.save(null, {
			success: function(curuser) {
				data.cheakFollows = false;
			}
		});
	}
	
	$scope.cheakFollow = function(data){
		if(curuser.get('followers')){
			for(var i=0; i<curuser.get('followers').length; i++){
				if(data == curuser.get('followers')[i]){						
					return true;
				}
			}
		}
		return false;
	}
  });
