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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.go = function () {
        throw new Error("Method is not implemented");
    };
    Vehicle.prototype.stop = function () {
        throw new Error("Method is not implemented");
    };
    return Vehicle;
}());
var CarsFactory = /** @class */ (function () {
    function CarsFactory() {
    }
    CarsFactory.prototype.createCar = function (maxSpeed) {
        throw new Error("Method is not implemented");
    };
    CarsFactory.prototype.selectRandomName = function () {
        return this.names[Math.floor(Math.random() * this.names.length)];
    };
    return CarsFactory;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(name, maxSpeed) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    Toyota.prototype.go = function () {
        console.log("The " + this.name + " is running, the max speed is " + this.maxSpeed);
    };
    Toyota.prototype.stop = function () {
        console.log("The " + this.name + " has been stopped");
    };
    return Toyota;
}(Vehicle));
var ToyotaFactory = /** @class */ (function (_super) {
    __extends(ToyotaFactory, _super);
    function ToyotaFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = ["Carolla", "Camry", "Aygo"];
        return _this;
    }
    ToyotaFactory.prototype.createCar = function (maxSpeed) {
        return new Toyota(this.selectRandomName(), maxSpeed);
    };
    return ToyotaFactory;
}(CarsFactory));
var Volkswagen = /** @class */ (function () {
    function Volkswagen(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }
    Volkswagen.prototype.go = function () {
        console.log("The " + this.name + " has been run");
    };
    Volkswagen.prototype.stop = function () {
        console.log("The " + this.name + " car has been stopped. The max speed " + this.maxSpeed);
    };
    return Volkswagen;
}());
var VolkswagenFactory = /** @class */ (function (_super) {
    __extends(VolkswagenFactory, _super);
    function VolkswagenFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.names = ["Polo", "Golf", "Tiguan"];
        return _this;
    }
    VolkswagenFactory.prototype.createCar = function (maxSpeed) {
        return new Volkswagen(this.selectRandomName(), maxSpeed);
    };
    return VolkswagenFactory;
}(CarsFactory));
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var carsFactories = [new ToyotaFactory(), new VolkswagenFactory()];
        var cars = [];
        for (var i = 0; i < carsFactories.length; i++) {
            cars.push(carsFactories[i].createCar(Math.floor(Math.random() * (i + 1) * 100 - 2 * i)));
        }
        var _loop_1 = function (car) {
            car.go();
            setTimeout(function () { return car.stop(); }, 1000);
        };
        for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
            var car = cars_1[_i];
            _loop_1(car);
        }
    };
    return App;
}());
new App().start();
