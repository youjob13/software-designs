/**
 * The Interface Segregation Principle - it's better to have many small interfaces rather than a few large interfaces
 */

/**
 * Benefits:
 * - It helps to avoid unnecessary dependencies and ensures that classes only implement the methods they actually need. (Decoupling, flexibility, testing, better control, principle of least knowledge etc.)
 * - Smaller, more focused interfaces are easier to understand, maintain and implement.
 * - Reducing side effects of interfaces changes
 */

/** <-- Bad example --> */

interface IBot {
  makePaymentWithTON(): void;
  makePaymentWithCreditCard(): void;
}

class TelegramBot_ implements IBot {
  makePaymentWithCreditCard(): void {
    // some logic here...
    console.log(`[Telegram]. The credit card payment has been processed.`);
  }

  makePaymentWithTON(): void {
    // some logic here...
    console.log(`[Telegram]. The TON payment has been processed.`);
  }
}

class ViberBot_ implements IBot {
  makePaymentWithCreditCard(): void {
    // some logic here...
    console.log(`[Viber]. The credit card payment has been processed.`);
  }

  makePaymentWithTON(): void {
    throw new Error(
      `[Viber]. The current app doesn't support TON payment method`
    );
  }
}

console.log("[Bad examples]: ");

const tgBot_ = new TelegramBot_();
tgBot_.makePaymentWithCreditCard();
tgBot_.makePaymentWithTON();

try {
  const viberBot_ = new ViberBot_();
  viberBot_.makePaymentWithCreditCard();
  viberBot_.makePaymentWithTON();
} catch (error: any) {
  console.error(`${error.name}: ${error.message}`);
}

/** <-- Bad example --/> */

/** <-- Good example --> */

interface ICanPayWithTon {
  makePaymentWithTON(): void;
}

interface ICanPayWithCreditCard {
  makePaymentWithCreditCard(): void;
}

class TelegramBot implements ICanPayWithTon, ICanPayWithCreditCard {
  makePaymentWithCreditCard(): void {
    // some logic here...
    console.log(`[Telegram]. The credit card payment has been processed.`);
  }

  makePaymentWithTON(): void {
    console.log(`[Telegram]. The TON payment has been processed.`);
    // some logic here...
  }
}

class ViberBot implements ICanPayWithCreditCard {
  makePaymentWithCreditCard(): void {
    // some logic here...
    console.log(`[Viber]. The credit card payment has been processed.`);
  }
}

console.log("[Good examples]: ");

const tgBot = new TelegramBot();
tgBot.makePaymentWithCreditCard();
tgBot.makePaymentWithTON();

const viberBot = new ViberBot();
viberBot.makePaymentWithCreditCard();

/** <-- Good example --/> */
