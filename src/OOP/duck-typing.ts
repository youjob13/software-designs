/**
 * Duck Typing.
 * If two or more unrelated objects respond to the same method name they are ducks.
 * "If it walks like a duck, speaks like a duck then this is a duck."
 */

function makeItSpeak(animal: { speak(): void }) {
  if (animal.speak) {
    animal.speak();
  } else {
    console.log("This object cannot speak!");
  }
}

class Dog {
  speak() {
    console.log("Woof woof!");
  }
}

class Cat {
  speak() {
    console.log("Meow meow!");
  }
}

const robot = {
  speak: () => {
    console.log("Beep boop!");
  },
};

const doggo = new Dog();
const kitty = new Cat();

makeItSpeak(doggo); // Outputs: Woof woof!
makeItSpeak(kitty); // Outputs: Meow meow!
makeItSpeak(robot); // Outputs: Beep boop!
