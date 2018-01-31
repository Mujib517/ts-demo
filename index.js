var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//class decorator
function MyDecorator(target) {
    console.log("Decorated");
}
//decorator factory
function MyDecorator2(obj) {
    return function (target) {
        console.log("Deocrated");
    };
}
//function decorator
function deprecated(target, prop, propDesc) {
    console.log("Property " + prop + " deprecated");
}
function obsolete(target, prop) {
    throw new Error("Property is obsolete");
}
function paramDecorator(target, prop, idx) {
    console.log(target, prop, idx);
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    // @obsolete
    // myProperty: string;
    MyClass.prototype.myMethod = function () { };
    MyClass.prototype.myMethod2 = function (param) {
    };
    __decorate([
        deprecated
    ], MyClass.prototype, "myMethod", null);
    __decorate([
        __param(0, paramDecorator)
    ], MyClass.prototype, "myMethod2", null);
    MyClass = __decorate([
        MyDecorator
    ], MyClass);
    return MyClass;
}());
