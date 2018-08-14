"use strict";
//Module
var moduleServ = angular.module("moduleServ", []);
 
var list = [{"Id":1,"Name":"Maximiliano","Salary":30000},
            {"Id":2,"Name":"Lucas","Salary":50000},
            {"Id":3,"Name":"Julian","Salary":150000}];
//Service
moduleServ.service('dataService', function(){
    //return emp list
    this.serviceData = function(){
       return list;
    };

    //ADD
    this.addEmp = function(data){
        list.push(data);
    };
   
    //DELETE
    this.delEmp = function(dataId){
        list.splice(dataId,1);
    };
    
    //UPDATE
    this.updateEmp = function(emp) {
        $.grep(list, function(e){
            if(e.Id == emp.Id){
                e.Name=emp.Name;
                e.Salary=emp.Salary;
            }
        });
    };

});