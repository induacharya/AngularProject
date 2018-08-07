var myApp = angular.module("myApp", []);

myApp.controller("myController",function($scope){
    console.log("In myController");

    $scope.newUser = {};


    $scope.users = [
        {username: "indu", fullName: "shree", email:"hjvgv"}

    ];


    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};

    };


});