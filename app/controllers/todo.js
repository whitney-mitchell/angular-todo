'use strict';
// This just does the angular stuff
// first arg is name of function itself, second is scope function
app.controller("TodoCtrl", ($scope, $http) => {

  $scope.title = 'Angular Todo - PFM!';
  $scope.filter2 = '';
  $scope.potato = '';
  $scope.variableName = '';

  $scope.newTodo = '';
  $scope.taskType = 'home';

  $scope.selectedTodo = 'nothing';

  // $scope.tasks = [
  // 	{name: "Make the bed", type: "home"},
  // 	{name: "Eat", type: "work"},
  // 	{name: "Wash", type: "home"},
  // 	{name: "Watch", type: "work"},
  // 	{name: "Read", type: "home"}
  // ]

  // $http({
  // 	method: "GET",
  // 	url: "/data/tasks.json",
  // }).then((response) => {
  // 	$scope.tasks = response.data.tasks
  // })
// Shorthand GET request
  $http.get('/data/tasks.json')
		.then((response) => {
      console.log("response", response);
      $scope.tasks = response.data.tasks;
  })
// Shorthand POST request
// $http.post('/data/tasks.json', {data: "what I'm sending"})
  // .then((response) => {
  //   console.log("response", response);
  //   $scope.tasks = response.data.tasks;
  // })

  $scope.addTodo = () => {
  	// look at homeTask, if true, set to home, if false, set to work
  	const taskType = $scope.homeTask ? "home" : "work";
  	$scope.tasks.push({ name: $scope.newTodo, type: $scope.taskType});
  	$scope.newTodo ='';
  }

// delete method: looks for task to remove from the array
  $scope.removeTodo = (task) => {
    const taskIndex = $scope.tasks.indexOf(task);
    if (taskIndex >= 0) {
    	$scope.tasks.splice(taskIndex, 1);
    }
  }

})
