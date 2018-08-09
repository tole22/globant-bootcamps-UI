
var app = angular.module("mainApp",[]);

app.controller("CRUDController", function($scope){

    $scope.EmpList= []; //empty array of employees

    var employee;// selected employee for delete it

    var count_id = 1;// init IDs employeess

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
    }

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
    }

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
    };

    $scope.ClearModel = function(){
       ClearModel();
    };

});
