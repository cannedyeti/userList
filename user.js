var usersList = angular.module('usersList', []);

var myFirebaseRef = new Firebase("https://blinding-heat-3450.firebaseio.com/");

usersList.controller('userCtrl', function($scope){

	function resetUser() {
		$scope.user = {
			firstName: "",
			lastName: "",
			email: ""
		}
	}

	//adds user based on input
	function addUser() {
		$scope.userList.push($scope.user);
		resetUser();
	}

	//delete user
	function deleteUser(user) {
		var index = $scope.userList.indexOf(user);
		$scope.userList.splice(index, 1);
	}


	//edit current user
	function editUser() {
		$scope.editMode = true;
	}

	//update
	function updateUser(){
		$scope.editMode = false;
	}

	//current users
	$scope.userList = [];



	$scope.addUser = addUser;
	$scope.deleteUser = deleteUser;
	$scope.editUser = editUser;
	$scope.updateUser = updateUser;
});