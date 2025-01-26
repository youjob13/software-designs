/**
 * The Liskov Substitution Principle - objects of a superclass (base class) shall be replaceable with objects of its subclasses (child classes) without breaking code.
 *
 * (Contravariance)
 * An overridden methods of a subclass should accept inputs that are as broad or broader than those accepted by the methods of the superclass.
 * This ensures that any inputs that could be handled by the superclass can also be handled by the subclass.
 *
 * (Covariance)
 * An overridden methods of a subclass must return outputs that are as specific or more specific than those returned by the methods of the superclass.
 * This guarantees that any expectations that clients of the superclass have about method outputs are met (or exceeded) by the subclass.
 *
 * (see more #3 src\OOP\something.ts)
 */

/**
 * Benefits:
 * - You can define behavior that doesn't depend on details. (e.g. function that accepts the base type instance as a parameter but then it also can accept an instance of subtype)
 */

/** <-- Bad example --> */

class CreditCard_ {
  protected card = "Some Credit";
  constructor(card?: string) {
    this.card = card || this.card;
  }

  makePayment(
    data: number,
    isInternationalTransaction: boolean
  ): "ok" | "rejected" | "error" {
    if (isInternationalTransaction) {
      console.log(
        `The is an international transaction. Addition checks are required... please wait...`
      );
    }

    console.log(`The payment has been made with ${this.card} Card`);
    return data < 500 ? "ok" : "error";
  }
}

class WorldCard_ extends CreditCard_ {
  constructor() {
    super("World");
  }

  override makePayment(
    data: number,
    isInternationalTransaction = false
  ): "ok" | "error" {
    if (isInternationalTransaction) {
      throw new Error(
        `The world card cannot process international transactions`
      );
    }

    console.log(`The payment has been made with ${this.card} Card`);
    return data < 500 ? "ok" : "error";
  }
}

function processInternationalPayment(card: CreditCard_, amount: number) {
  return card.makePayment(amount, true);
}

const creditCard_ = new CreditCard_();
console.log("[Bad example]. ", processInternationalPayment(creditCard_, 100));
const worldCard_ = new WorldCard_();
try {
  processInternationalPayment(worldCard_, 100); // Will throw the error
} catch (error: any) {
  console.error(`[Bad example]. ${error.name}: ${error.message}`);
}

/** <-- Bad example --/> */

/** <-- Good example --> */

class CreditCard {
  protected card = "Some Credit";
  constructor(card?: string) {
    this.card = card || this.card;
  }

  supportsInternationalTransactions(): boolean {
    return true; // Default behavior
  }

  makePayment(
    data: number,
    isInternationalTransaction: boolean
  ): "ok" | "rejected" | "error" {
    if (isInternationalTransaction) {
      console.log(
        `The is an international transaction. Addition checks are required... please wait...`
      );
    }

    if (
      isInternationalTransaction &&
      !this.supportsInternationalTransactions()
    ) {
      console.log(`International transactions are not supported.`);
      return "rejected";
    }

    console.log(`The payment has been made with ${this.card} Card`);
    return data < 500 ? "ok" : "error";
  }
}

class WorldCard extends CreditCard {
  constructor() {
    super("World");
  }

  override supportsInternationalTransactions(): boolean {
    return false;
  }
}

function processInternationalPayment2(card: CreditCard, amount: number) {
  return card.makePayment(amount, true);
}

const creditCard = new CreditCard();
console.log("[Good example]. ", processInternationalPayment2(creditCard, 100));
const worldCard = new WorldCard();
console.log("[Good example]. ", processInternationalPayment2(worldCard, 100));

/** <-- Good example --/> */
