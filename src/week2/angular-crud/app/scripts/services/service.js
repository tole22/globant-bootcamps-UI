"use strict";
//Module
var moduleServ = angular.module("moduleServ", []);
 

//Service
moduleServ.service('dataService', function(){
    this.serviceData = function(){
       return [{"Id":1,"Name":"Maximiliano","Salary":30000},
       {"Id":2,"Name":"Lucas","Salary":50000},
       {"Id":3,"Name":"Julian","Salary":150000}];
    };
});