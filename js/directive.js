var appResize=angular.module('appResize', []);

	appResize.directive('resizeh', ['$window', function ($window) {

	    return {
	        link: link,
	        restrict: 'C',        
	    };
    	function link(scope, element, attrs){
    		//initial heighr
    		scope.e_height = $window.innerHeight;
	      	element.css({
					height:(scope.e_height) -100 +'px'		
			})
			//resize
	       	angular.element($window).bind('resize', function(){
	        	scope.e_height = $window.innerHeight;
	        	element.css({
					height:(scope.e_height ) -100 +'px'		
				})
	        	scope.$digest();
	       	});
    	}
	}]);

		appResize.directive('resizew', ['$window', function ($window) {

	    return {
	        link: link,
	        restrict: 'C',        
	    };
    	function link(scope, element, attrs){
    		//initial heighr
    		scope.e_width = $window.innerWidth;
	      	element.css({
					width:(scope.e_width) -260 +'px'		
			})
			//resize
	       	angular.element($window).bind('resize', function(){
	        	scope.e_width = $window.innerWidth;
	        	element.css({
					width:(scope.e_width ) -260 +'px'		
				})
	        	scope.$digest();
	       	});
    	}
	}]);