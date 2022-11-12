app.controller('MainController', ['$scope', function($scope) {
    $scope.todo = {
        title: "things to do",
        list: ["test1", "test2"]    
    }   
    $scope.books = {
        title: "books to get",
        list: []
    }
    $scope.addItem = function(itemList, item) {
        console.log("moro")
        itemList.push(item);
    }
}])