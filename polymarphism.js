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
var Bank = /** @class */ (function () {
    function Bank() {
        this.intrest = 5;
        // rateOfIntrest(){
        //     console.log("HI By Deafault is :"+this.intrest) no Over loading in JS 
        // }
    }
    Bank.prototype.rateOfIntrest = function () {
        console.log("HI By Deafault is :" + this.intrest);
    };
    return Bank;
}());
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SBI;
}(Bank));
var AXIX = /** @class */ (function (_super) {
    __extends(AXIX, _super);
    function AXIX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AXIX.prototype.rateOfIntrest = function () {
        console.log("HI By Deafault is :" + 6); // Over Riding 
    };
    return AXIX;
}(Bank));
var b = new Bank();
b.rateOfIntrest();
var a = new AXIX();
a.rateOfIntrest();
