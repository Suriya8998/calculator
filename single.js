"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Manager = exports.Tester = exports.Dev1 = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    Employee.prototype.display = function () {
        console.log("name : " + this.name);
        console.log("age : " + this.age);
        console.log("salary : " + this.salary);
        console.log("desigation : " + this.designation);
    };
    Employee.prototype.raisesal = function () {
        this.salary = (this.salary * (20 / 100) + this.salary);
        console.log("Employee increaent:" + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
var Dev1 = /** @class */ (function (_super) {
    __extends(Dev1, _super);
    function Dev1(name, age, salary, designation) {
        return _super.call(this, name, age, salary, designation) || this;
    }
    Dev1.prototype.raisesal1 = function () {
        this.salary = (this.salary * (30 / 100) + this.salary);
        console.log("employee increament:" + this.salary);
    };
    return Dev1;
}(Employee));
exports.Dev1 = Dev1;
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(name, age, salary, designation) {
        return _super.call(this, name, age, salary, designation) || this;
    }
    Tester.prototype.raisesal2 = function () {
        this.salary = (this.salary * (35 / 100) + this.salary);
        console.log("developer increament:" + this.salary);
    };
    return Tester;
}(Employee));
exports.Tester = Tester;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary, designation) {
        return _super.call(this, name, age, salary, designation) || this;
    }
    Manager.prototype.raisesal3 = function () {
        this.salary = (this.salary * (40 / 100) + this.salary);
        console.log("developer increament:" + this.salary);
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
