	var app=angular.module('feedTest', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'appCon',
		'feedService',
		'appResize']);

		app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/',{
			templateUrl:'pages/home.html',
			controller:'feedCtrl'
		}).
		when('/RSS',{
			templateUrl:'pages/RSS.html',
			controller:'feedCtrl'
		}).
		when('/Contact',{
			templateUrl:'pages/Contact.html',
			controller:'feedCtrl'
		}).
		otherwise({
			redirectTo:'/'
		});

	}]);