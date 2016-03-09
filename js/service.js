var feedService=angular.module('feedService', [])

feedService.factory('feedService', ['$http', function($http) {		
	var feedService = {
			findFeed: function(url){
				return  $http.jsonp('//ajax.googleapis.com/ajax/services/feed/find?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
			},
			loadFeed: function(url){
				return  $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
			}		

	}
	return feedService;		
}]);