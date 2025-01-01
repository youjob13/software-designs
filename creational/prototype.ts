/**
 * Helpful when we need to extend or narrow objects
 */

abstract class Clonnable {
  clone() {
    throw new Error("Method is not implemented");
  }
}

export class Shape extends Clonnable {
  constructor(private width: number, private height: number) {
    super();
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  clone() {
    return new Shape(this.width, this.height);
  }
}

class App {
  start() {
    const originalShape = new Shape(13, 15);
    console.log(
      `I am the original shape with: width equal ${originalShape.getWidth()} and height equal ${originalShape.getHeight()}`
    );
    const clonedShape = originalShape.clone();
    console.log(
      `I am the cloned shape with: width equal ${clonedShape.getWidth()} and height equal ${clonedShape.getHeight()}`
    );
    console.log(
      `Are objects references equal? ${originalShape === clonedShape}`
    );
  }
}

new App().start();
