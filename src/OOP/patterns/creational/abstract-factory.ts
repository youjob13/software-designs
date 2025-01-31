/**
 * Useful when we want to manipulate with different objects that have similar signature
 */

abstract class Vehicle {
  name!: string;
  maxSpeed!: number;
  go() {
    throw new Error("Method is not implemented");
  }
  stop() {
    throw new Error("Method is not implemented");
  }
}

abstract class CarsFactory {
  protected names!: string[];
  createCar(maxSpeed: number): Vehicle {
    throw new Error("Method is not implemented");
  }
  selectRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }
}

class Toyota extends Vehicle {
  constructor(public name: string, public maxSpeed: number) {
    super();
  }

  go() {
    console.log(
      `The ${this.name} is running, the max speed is ${this.maxSpeed}`
    );
  }

  stop() {
    console.log(`The ${this.name} has been stopped`);
  }
}

class ToyotaFactory extends CarsFactory {
  protected names = ["Carolla", "Camry", "Aygo"];

  createCar(maxSpeed: number) {
    return new Toyota(this.selectRandomName(), maxSpeed);
  }
}

class Volkswagen implements Vehicle {
  constructor(public name: string, public maxSpeed: number) {}

  go() {
    console.log(`The ${this.name} has been run`);
  }

  stop() {
    console.log(
      `The ${this.name} car has been stopped. The max speed ${this.maxSpeed}`
    );
  }
}

class VolkswagenFactory extends CarsFactory {
  protected names = ["Polo", "Golf", "Tiguan"];

  createCar(maxSpeed: number) {
    return new Volkswagen(this.selectRandomName(), maxSpeed);
  }
}

export class App {
  start() {
    const carsFactories = [new ToyotaFactory(), new VolkswagenFactory()];

    let cars: Vehicle[] = [];
    for (let i = 0; i < carsFactories.length; i++) {
      cars.push(
        carsFactories[i].createCar(
          Math.floor(Math.random() * (i + 1) * 100 - 2 * i)
        )
      );
    }

    for (const car of cars) {
      car.go();

      setTimeout(() => car.stop(), 1000);
    }
  }
}

new App().start();
