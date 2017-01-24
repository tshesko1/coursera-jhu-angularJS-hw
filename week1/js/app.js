(function() { // IIFE Style
'use strict';

angular.module('LunchCheck', [])

// Dependency Injection Minification proof using .$inject
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.msg = null; // { status : false, text: "" };
  $scope.items = {Str : ""};
  $scope.checkIfTooMuch = function() {
  	// Empty String Case
  	if(!$scope.items.Str) {
  		$scope.msg = {
  	 		class: "danger",
  	 		text: "Please enter data first"
  	 	}; 
  	 	return;
  	}

  	// Split the String
  	$scope.items.Array = $scope.items.Str.split(',');

  	// Counting meaningful Items
		$scope.items.Count = 0;
		for(var i=0; i < $scope.items.Array.length; ++i) {
			$scope.items.Array[i] = myStrTrim($scope.items.Array[i]);
			$scope.item = $scope.items.Array[i];
			if($scope.item) $scope.items.Count +=1;
		}

  	if($scope.items.Count <= 3){ 
  		$scope.msg = {
  			text: "Enjoy!", class : "success"
		  };
		}
  	else if($scope.items.Count  > 3) { 
  		$scope.msg = {
		  	text : "Too much!", class: "success" //"warning",
		  };
		}

		// Helper Function
		function myStrTrim(x) {
		  return x.replace(/^\s+|\s+$/gm,'');
		}
		/** Test Item list used
			 , hjj,, sfhjgks45,     , kl, gfh768
		**/
  	
  };
};

})();