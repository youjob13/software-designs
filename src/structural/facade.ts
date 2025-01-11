/**
 * Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
 *
 * The business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.
 *
 * A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts.
 * A facade might provide limited functionality in comparison to working with the subsystem directly.
 * However, it includes only those features that clients really care about.
 */

interface IProduct {
  id: string;
  name: string;
}

class Shop {
  private items: Record<IProduct["id"], IProduct[]> = {
    "1": [{ name: "Door", id: "1" }],
  };

  buy({ productId, count }: { productId: string; count: number }) {
    const products = this.items[productId].splice(0, count);
    console.log("Buy in shop");
    return products;
  }

  sell(productToSellData: any) {
    // here should be some logic
  }

  checkAvailability({
    productId,
    count,
  }: {
    productId: string;
    count: number;
  }) {
    return this.items[productId].length >= count;
  }

  loadNewProducts({
    productId,
    products,
  }: {
    productId: string;
    products: IProduct[];
  }) {
    this.items[productId] = [...(this.items[productId] || []), ...products];
  }
}

class Warehouse {
  private items: Record<IProduct["id"], IProduct[]> = {
    "1": [{ name: "Door", id: "1" }],
  };

  checkAvailability({
    productId,
    count,
  }: {
    productId: string;
    count: number;
  }) {
    return this.items[productId].length >= count;
  }

  loadNewProducts({
    productId,
    products,
  }: {
    productId: string;
    products: IProduct[];
  }) {
    this.items[productId] = [...(this.items[productId] || []), ...products];
  }

  get({ productId, count }: { productId: string; count: number }) {
    const products = this.items[productId].splice(0, count);
    console.log("Get from warehouse");
    return products;
  }
}

class Factory {
  private productByIdMap: Record<IProduct["id"], IProduct> = {
    1: { name: "Door", id: "1" },
  };

  orderNewProduct({ productId, count }: { productId: string; count: number }) {
    console.log("Order from factory");
    return new Array(count)
      .fill(productId)
      .map(() => this.productByIdMap[productId]);
  }
}

class OperatorFacade {
  private warehouse = new Warehouse();
  private shop = new Shop();
  private factory = new Factory();

  makeOrder(details: { productId: string; count: number }) {
    if (this.shop.checkAvailability(details)) {
      return this.shop.buy(details);
    }
    console.log(`There are no such products in the shop :( 
        Let's check warehouse first`);

    if (this.warehouse.checkAvailability(details)) {
      return this.deliverProductsToShop(details);
    }

    console.log(`There are no such products in the warehouse :( 
        Let's order new from the factory`);

    const products = this.factory.orderNewProduct(details);
    this.warehouse.loadNewProducts({
      products,
      productId: details.productId,
    });
    return this.deliverProductsToShop(details);
  }

  private deliverProductsToShop({
    productId,
    count,
  }: {
    productId: string;
    count: number;
  }) {
    const productsForShop = this.warehouse.get({ productId, count });
    this.shop.loadNewProducts({ productId, products: productsForShop });
    return this.shop.buy({ productId, count });
  }
}

class App {
  private operatorFacade = new OperatorFacade();

  start() {
    const product1 = this.operatorFacade.makeOrder({
      productId: "1",
      count: 1,
    });

    console.log("Buy directly from shop: ", product1);
    console.log("______________________________________");

    this.operatorFacade.makeOrder({
      productId: "1",
      count: 1,
    });

    console.log("Order from warehouse: ", product1);
    console.log("______________________________________");

    this.operatorFacade.makeOrder({
      productId: "1",
      count: 1,
    });

    console.log("Order from factory: ", product1);
  }
}

const app = new App();
app.start();
