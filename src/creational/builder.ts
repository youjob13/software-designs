/**
 * When we want to construct complex objects step-by-step
 * and we don't want to use subclasses and inheritance.
 * It separates the construction of an object from its representation,
 * enabling the same construction process to create different representations.
 *
 * this pattern is particularly useful when dealing with objects that require numerous optional parameters
 * or when the construction process involves several steps.
 *
 * Creating a complex object by specifying the type and content only.
 * Construction details are hidden from the client.
 * The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished.
 */

class AnimalBuilder {
  private parameters: Map<string, (target: Animal) => void> = new Map();

  getParams() {
    return this.parameters;
  }

  constructor(private name: string) {
    this.parameters.set("name", (target) => (target.name = name));
  }

  withVoice(voice: string) {
    this.parameters.set("voice", (target) => (target.voice = voice));
    return this;
  }

  // withPossibilityToFly() {
  //   this.parameters.set("couldFly", true);
  //   this.withWings();
  //   return this;
  // }

  // withPossibilityToSwim() {
  //   this.parameters.set("couldSwim", true);
  //   return this;
  // }

  // withPaws() {
  //   this.parameters.set("hasPaws", true);
  //   return this;
  // }

  // withWings() {
  //   this.parameters.set("hasWings", true);
  //   return this;
  // }

  build() {
    return new Animal(this);
  }
}

class Animal {
  private _voice!: string;
  private couldFly = false;
  private couldSwim = false;
  private hasPaws = false;
  private hasWings = false;
  private _name!: string;

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set voice(voice: string) {
    this._voice = voice;
  }

  get voice() {
    return this._voice;
  }

  constructor(builder: AnimalBuilder) {
    for (const [key, value] of Array.from(builder.getParams())) {
      value(this);
    }
  }

  say() {
    console.log(this.voice);
  }

  fly() {
    if (!this.hasWings || !this.couldFly) {
      console.error(`Sorry, but ${this.name} can't fly :(`);
      return;
    }
    console.log(`${this.name} flew`);
  }

  swim() {
    if (!this.couldSwim) {
      console.error(`Sorry, but ${this.name} can't swim :(`);
      return;
    }
    console.log(`${this.name} swam`);
  }

  go() {
    if (!this.hasPaws) {
      console.error(`Sorry, but ${this.name} don't have paws :(`);
      return;
    }
    console.log(`${this.name} went`);
  }
}

class Zoo {
  private animals: Animal[] = [];

  set(builder: AnimalBuilder) {
    const animal = builder.build();
    this.animals.push(animal);
    return this;
  }

  start() {
    for (const animal of this.animals) {
      animal.say();
      animal.go();
      animal.fly();
      animal.swim();
    }
  }
}

const zoo = new Zoo();

const henBuilder = new AnimalBuilder("Hen")
  // .withPaws()
  // .withPossibilityToFly()
  .withVoice("Co-co-co");

const penguinBuilder = new AnimalBuilder("Penguin")
  // .withPaws()
  // .withPossibilityToSwim()
  .withVoice("...");

const duckBuilder = new AnimalBuilder("Duck")
  // .withPaws()
  // .withPossibilityToSwim()
  // .withPossibilityToFly()
  .withVoice("Krya-krya");

zoo.set(henBuilder).set(penguinBuilder).set(duckBuilder).start();
