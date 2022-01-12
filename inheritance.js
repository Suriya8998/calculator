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
var Prakash = /** @class */ (function () {
    function Prakash(name, age) {
    }
    return Prakash;
}());
var Seetha = /** @class */ (function (_super) {
    __extends(Seetha, _super);
    function Seetha(name, age, salary, desig) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.salary = salary;
        _this.desig = desig;
        return _this;
    }
    Seetha.prototype.display = function () {
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
        console.log("Saary  : " + this.salary);
        console.log("Desig : " + this.desig);
    };
    return Seetha;
}(Prakash));
var Suriya = /** @class */ (function (_super) {
    __extends(Suriya, _super);
    function Suriya(name, age, salary, desig) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.salary = salary;
        _this.desig = desig;
        return _this;
    }
    Suriya.prototype.dev = function () {
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
        console.log("Saary  : " + this.salary);
        console.log("Desig : " + this.desig);
    };
    return Suriya;
}(Prakash));
var s = new Seetha("Seetha", 25, 50000, "tester");
var m = new Suriya("Suriya", 25, 50000, "Developer");
s.display();
console.log("***************");
m.dev();
