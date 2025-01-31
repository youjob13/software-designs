/**
 * Abstraction means the HIGHLIGHTING of some SIGNIFICANT parts, meaningful information or HIDING INSIGNIFICANT behavior that is not important for the client code.
 * Abstraction is essential when dealing with system complexity by hiding implementation details and only HIGHLIGHTING essential aspects of behavior.
 * The idea of abstraction is to describe real life objects and how they interact in a software system.
 * THE MAIN THING IS NOT TO CHANGE THE PUBLIC INTERFACE ON WHICH CLIENTS DEPEND.
 */

// ====================================================================================================================================================================================================================

/**
 * Encapsulation help to hide unimportant implementation details out of sight.
 * The public mutable data violates encapsulation, because in this case any client of the class can change the internal state of the class object without the notification of the class.
 * The public part should expose more about what the class does and hide unnecessary implementation details from client.
 */

// ====================================================================================================================================================================================================================

/**
 * Polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.
 * Poly - many / morphs - forms. (many forms, something can exist in several forms)
 * In programming e.g. objects of different types are sharing the same interface.
 *
 * Static polymorphism: allows you to implement multiple methods within the same class that use the same name but a different set of parameters. That is called method overloading.
 * Dynamic polymorphism: does not allow the compiler to determine the executed method. (e.g. when subclass override the behavior of its superclass)
 */

// ====================================================================================================================================================================================================================

/**
 * Inheritance is a mechanism of basing an object or class upon another object (prototypical inheritance) or class (class-based inheritance).
 *
 * When to use?
 *
 * When a SUBCLASS should have everything a SUPERCLASS plus something else.
 * Inheritance solves the problem of related types that share a great deal of common behavior but differ across some dimension;
 */

/**
 * Template Method Pattern. Default Implementation.
 * Describe basic structure/algorithm in a superclass and redefine parts of this structure/algorithm to those that are already specific for a particular class is called the template method.
 *
 */

abstract class Bicycle {
  protected readonly defaultTireSize: any;
  protected readonly defaultChain = "11-speed";
  private chain: any;
  private tireSize: any;

  constructor(opts: any) {
    // ...
    this.chain = opts.chain || this.defaultChain;
    this.tireSize = opts.tireSize || this.defaultTireSize;
  }
}

class RoadBike extends Bicycle {
  protected readonly defaultTireSize = "28";
}

class MountainBike extends Bicycle {
  protected readonly defaultTireSize = "29";
}

/**
 * Minuses:
 * - SUPERCLASS depends on CHILDREN,
 * - If you forget to call super methods - the result might not contain all data required;
 */

/**
 * Using Hook Messages: Decoupling Subclasses.
 * This strategy removes the knowledge of the algorithm from the subclass and return control to the superclass. (postInitialize)
 * Let's to avoid using super()
 */
abstract class BicycleRefactored {
  private chain: any;
  private tireSize: any;
  private size: any;

  protected abstract localSpares(): Record<string, unknown>;

  constructor(opts: any) {
    this.size = opts.size;
    this.chain = opts.chain;
    this.tireSize = opts.tireSize;

    this.postInitialize(opts);
  }

  protected postInitialize(opts: any) {}

  spares() {
    return {
      tireSize: this.tireSize,
      chain: this.chain,
      ...this.localSpares(),
    };
  }
}

class RoadBikeRefactored extends BicycleRefactored {
  private tapeColor: any;

  protected postInitialize(opts: any) {
    this.tapeColor = opts.tapeColor;
  }

  protected localSpares() {
    return { tapeColor: this.tapeColor };
  }
}

class MountainBikeRefactored extends BicycleRefactored {
  private frontShock: any;

  protected postInitialize(opts: any) {
    this.frontShock = opts.frontShock;
  }

  protected localSpares() {
    return { frontShock: this.frontShock };
  }
}
