var appCon = angular.module('appCon', ['feedService']);

appCon.controller('indexCon', ['$scope', function($scope){
	//initialization
	$scope.topBarItemSelected = 1;
}]);


appCon.controller('feedCtrl', ['$scope','feedService', function ($scope,feedservices) {
		//initialization
		$scope.panelshow=true;
		$scope.searchExpandButton=false;
		$scope.show_step_2=false;
		$scope.show_description_box=false;
		$scope.selectedItem = null;
		$scope.showRSS = false;
		$scope.showRSSButton = false;		
		$scope.showInstructionStep2 = false;
		$scope.showInstructionStep3 = false;
		$scope.endInstruction = false;
		$scope.showSelectedlinkBox = false;
		$scope.showSearchLoading = true;

		

		
		$scope.startSearch = function(url){
			$scope.show_step_2 = true;
			$scope.showInstructionStep2 = true;
		    feedservices.findFeed(url).then(function(contents){
			$scope.searchContent=contents.data.responseData.entries;
			$scope.showSearchLoading = false;
			});
			//if search again, reset previous layout and results
			$scope.searchExpandButton = false;
			$scope.selectedSearch=undefined;
			$scope.loadedContent = undefined;
			$scope.show_description_box=false;
			$scope.selectedItem = null;
			$scope.showRSS = false;
			$scope.showRSSButton = false;			
		};

		$scope.searchExpand = function(){					
			if ($scope.selectedSearch==undefined) {
				$scope.selectedSearch=$scope.highlightSearchItem;
			} else {
				$scope.selectedSearch=undefined;
			};	
		}
		

		$scope.loadSelectedFeeds = function(url, website){			
			$scope.searchExpandButton=true; //show button
			$scope.show_description_box=true; //show description_box
			$scope.showRSS = true; //show RSS area
			$scope.showRSSButton = true; //show button
			feedservices.loadFeed(url).then(function(contents){
				$scope.loadedContent=contents.data.responseData.feed.entries;				
				if(contents.data.responseData.feed.description.length>0){
					$scope.web_description=contents.data.responseData.feed.description;
				} else{
					$scope.web_description='Description is not provided';
				};
				
				$scope.web_title=contents.data.responseData.feed.title;
			});
			$scope.selectedSearch=website;
			$scope.highlightSearchItem=website;
			$scope.filterFeedContent=undefined;	
			$scope.showInstructionStep3 = true;
			$scope.endInstruction = true
		}

		$scope.loadFeedPage = function(url){
			$scope.LoadedUrl=url;
			$scope.highlightFeddItem=url;
			$scope.showRSS = false;	
			$scope.showSelectedlinkBox = true;		
		}

		$scope.sendFeedBack = function(){
			alert("Thanks for your comment!")
		}


	}])

