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
exports.Shape = void 0;
var Clonnable = /** @class */ (function () {
    function Clonnable() {
    }
    Clonnable.prototype.clone = function () {
        throw new Error("Method is not implemented");
    };
    return Clonnable;
}());
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Shape.prototype.getWidth = function () {
        return this.width;
    };
    Shape.prototype.getHeight = function () {
        return this.height;
    };
    Shape.prototype.clone = function () {
        return new Shape(this.width, this.height);
    };
    return Shape;
}(Clonnable));
exports.Shape = Shape;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var originalShape = new Shape(13, 15);
        console.log("I am the original shape with: width equal " + originalShape.getWidth() + " and height equal " + originalShape.getHeight());
        var clonedShape = originalShape.clone();
        console.log("I am the cloned shape with: width equal " + clonedShape.getWidth() + " and height equal " + clonedShape.getHeight());
        console.log("Are objects references equal? " + (originalShape === clonedShape));
    };
    return App;
}());
new App().start();
