
"use strict";

var app = angular.module("mainApp",['LocalStorageModule','moduleServ']);


//MAIN APP CONTROLLER
app.controller("CRUDController", function($scope, dataService){


    $scope.EmpList= dataService.serviceData(); //empty array of employees

    var employee;// selected employee for delete it

    var count_id = $scope.EmpList.length+1;// init IDs employeess

    //LOCAL STORAGE

    $scope.AddData = function(){
        var emp = {
            Id: count_id,
            Name: $scope.Name,
            Salary: $scope.Salary
        };

        $scope.EmpList.push(emp);
        count_id++;
        ClearModel(); // reset all values to default
    };

    //Bind delete id emp

    $scope.BindEmptoDelete = function(emp){
        employee = emp;
    };

    //Delete
    $scope.DeleteData = function(){

            var index = $scope.EmpList.indexOf(employee);

            $scope.EmpList.splice(index,1);
    };

    //Select employee
    $scope.BindSelectedData = function(emp){
        $scope.Id = emp.Id;
        $scope.Name = emp.Name;
        $scope.Salary = emp.Salary;
    };

    //Update
    $scope.UpdateData = function(){
        $.grep($scope.EmpList, function(e){
            if(e.Id == $scope.Id){
                e.Name=$scope.Name;
                e.Salary=$scope.Salary;
            }
        });
        ClearModel(); // reset all values to default
    };

    function ClearModel() {
        $scope.Id = 0;
        $scope.Name = '';
        $scope.Salary = 0;
    }

    $scope.ClearModel = function(){
       ClearModel();
    };
    
});

//LOCAL STORAGE CONTROLLER
  
app.controller("LSController", function($scope, localStorageService){

   
  if(!localStorageService.get('bodyClass')){
        localStorageService.set('bodyClass', 'body-light');
        $scope.classBody = "body-light";
        $scope.onOff = "OFF";
  }else{
    $scope.classBody = localStorageService.get('bodyClass');
    switch ($scope.classBody) {
        case "body-light":
            $scope.onOff = "OFF";
            break;
        case "body-dark":
            $scope.onOff = "ON";
            break;
    }
  }

    $scope.toggleClass = function(){
        switch ($scope.classBody) {
            case "body-light":
                $scope.classBody = "body-dark";
                $scope.onOff = "ON";
                localStorageService.set('bodyClass', 'body-dark');
                break;
            case "body-dark":
                $scope.classBody = "body-light";
                $scope.onOff = "OFF";
                localStorageService.set('bodyClass', 'body-light');
                break;
        }
    };
});

