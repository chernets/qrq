'use strict';

angular.module('qrqApp')
  .controller('userpageCtrl', function($scope, $http,$rootScope,$state,$stateParams) {
	$rootScope.menu = "userpage";
	  $state.params;
	  $stateParams; 
	  var userpage_id;
	  
	  var user_page_me_now = Parse.User.current();
	if($stateParams.id){
		userpage_id = $stateParams.id;
		var query = new Parse.Query(Parse.User);
			query.get(userpage_id, {
				success: function(user_page_friend) {
					$scope.$apply(function() {
						$scope.user_pade_ids = user_page_friend;
					});
				}
			});
	}else{
		$scope.user_pade_ids = user_page_me_now;
	}

		$scope.$on('mapInitialized', function(event, map) {
				map.set('styles', [
					{
						"featureType": "landscape",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 65
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 51
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 30
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 40
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "transit",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"lightness": -25
							},
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"hue": "#ffff00"
							},
							{
								"lightness": -25
							},
							{
								"saturation": -97
							}
						]
					}
				]);
		});


  });
