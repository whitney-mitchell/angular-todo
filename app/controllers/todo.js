// This just does the angular stuff
// first arg is name of function itself, second is scope function
app.controller("TodoCtrl", function($scope) {

  $scope.title = 'Angular Todo - PFM!';
  $scope.filter2 = '';
  $scope.potato = '';
  $scope.variableName = '';

  $scope.newTodo = '';

  $scope.tasks = [
  	{name: "Make the bed", type: "home"},
  	{name: "Eat", type: "school"},
  	{name: "Wash", type: "home"},
  	{name: "Watch", type: "school"},
  	{name: "Read", type: "home"}
  ]

  $scope.addTodo = function() {
  	$scope.tasks.push({ name: $scope.newTodo, type: "home"});
  	$scope.newTodo ='';
  }

// delete method: looks for task to remove from the array
  $scope.removeTodo = (task) => {
    const taskIndex = $scope.tasks.indexOf(task);
    $scope.tasks.splice(taskIndex, 1);
  }

})
