/**
 * Decorator (Wrapper) is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
 *
 * Example:
 * Wearing clothes is an example of using decorators. When you’re cold, you wrap yourself in a sweater.
 * If you’re still cold with a sweater, you can wear a jacket on top.
 * If it’s raining, you can put on a raincoat.
 * All of these garments “extend” your basic behavior but aren’t part of you, and you can easily take off any piece of clothing whenever you don’t need it.
 *
 *  Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.
 */

interface IService {
  makeOrder: () => unknown;
}

class ServiceDecorator implements IService {
  constructor(private service: IService) {}

  makeOrder() {
    return this.service.makeOrder();
  }
}

class Shop implements IService {
  makeOrder() {
    console.log("[Shop]. Order has been created");
    return { name: "Potatoes" };
  }
}

class PackageDecorator extends ServiceDecorator {
  makeOrder() {
    const order = super.makeOrder();
    console.log("[PackageDecorator]. Order has been packaged");
    return order;
  }
}

class NotifierDecorator extends ServiceDecorator {
  makeOrder() {
    console.log("[NotifierDecorator]. Request has been received");
    const order = super.makeOrder();
    console.log("[NotifierDecorator]. Request has been completed");
    return order;
  }
}

class App {
  start() {
    let service: IService = new Shop();
    service = new PackageDecorator(service);
    service = new NotifierDecorator(service);

    service.makeOrder();
  }
}

export const app = new App();
app.start();
