/**
 * The Open Closed Principle - software entities should be open for extension but closed for modification.
 */

/** We can reach OCP by using inheritance */

/**
 * Benefits:
 * - Stability. Existing, tested code remains untouched, reducing the risk of bugs.
 * - Focus on what is necessary. You don't need rewrite existing code.
 * - It makes your code loosely coupled.
 */

/** <-- Bad example ==> */

/**
 * If we need to add new title, we will modify switch/case. (Violating OCP !!!)
 */

class Employee {
  constructor(private name: string, private title: string) {}

  getTitle() {
    switch (this.title) {
      case "software-engineer": {
        return `This employee is a/an ${this.title}`;
      }
      case "product-owner": {
        return `Wow, this person is very important. He is a/an ${this.title}`;
      }
      case "tester": {
        return `This person will maintain product in a good state. He is a/an ${this.title}`;
      }
    }
  }
}

const newEmployee1 = new Employee("Bob", "software-engineer");
console.log(`[Bad example]: `, newEmployee1.getTitle());
const newEmployee2 = new Employee("Jack", "product-owner");
console.log(`[Bad example]: `, newEmployee2.getTitle());
const newEmployee3 = new Employee("Boby", "tester");
console.log(`[Bad example]: `, newEmployee3.getTitle());

/** <-- Bad example ==/> */

/** <-- Bad example ==> */

/**
 * We should create a new class for every title.
 */

abstract class EmployeeRole {
  abstract getTitle(): string;
}

class EmployeeBase {
  constructor(protected name: string, protected title: string) {}
}

class SoftwareEngineer extends EmployeeBase implements EmployeeRole {
  constructor(protected name: string) {
    super(name, "software-engineer");
  }
  getTitle(): string {
    return `This employee is a/an ${this.title}`;
  }
}

class ProductOwner extends EmployeeBase implements EmployeeRole {
  constructor(protected name: string) {
    super(name, "product-owner");
  }
  getTitle(): string {
    return `Wow, this person is very important. He is a/an ${this.title}`;
  }
}

class QaTester extends EmployeeBase implements EmployeeRole {
  constructor(protected name: string) {
    super(name, "tester");
  }
  getTitle(): string {
    return `This person will maintain product in a good state. He is a/an ${this.title}`;
  }
}

const newSoftwareEngineer = new SoftwareEngineer("Alex");
console.log(`[Good example]: `, newSoftwareEngineer.getTitle());
const newProductOwner = new ProductOwner("Marty");
console.log(`[Good example]: `, newProductOwner.getTitle());
const newQaTester = new QaTester("Gloria");
console.log(`[Good example]: `, newQaTester.getTitle());

/** <-- Bad example ==/> */
