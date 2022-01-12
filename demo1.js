function abc() {
    console.log("Hi My Function ");
}
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.display = function () {
        console.log("Hi Method ");
    };
    return Demo2;
}());
var dd = new Demo2();
dd.display();
abc();
