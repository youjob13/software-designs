/**
 * When we want to create objects with different behaviors but common basics
 * but we don't want to use subclasses and inheritance
 */

class Bird {
  private voice: string | undefined;
  private couldFly = false;
  private couldSwim = false;

  constructor(private name: string) {}

  withVoice(voice: string) {
    this.voice = voice;
    return this;
  }

  withPossibilityToFly() {
    this.couldFly = true;
    return this;
  }

  withPossibilityToSwim() {
    this.couldSwim = true;
    return this;
  }

  build() {
    if (this.voice == null) {
      throw new Error(
        "Voice for your bird is not specified. Please provide voice"
      );
    } else {
      console.log(`${this.name} said: ${this.voice}`);
    }
    if (this.couldFly) {
      console.log(`${this.name} could fly`);
    }
    if (this.couldSwim) {
      console.log(`${this.name} could swim`);
    }
    return this;
  }
}
const hen = new Bird("Hen").withVoice("Co-co-co").build();
const penguin = new Bird("Penguin")
  .withPossibilityToSwim()
  .withVoice("...")
  .build();
const duck = new Bird("Duck")
  .withPossibilityToSwim()
  .withPossibilityToFly()
  .withVoice("Krya-krya")
  .build();
