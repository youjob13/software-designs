/**
 * High Cohesion and Low Coupling.
 *
 * Lower coupling indicates that the design is of good quality.
 * High cohesion meaning that the functionalities within a module are closely related.
 *
 * High Cohesion means that all functions/methods/utils in module are highly connected
 * (e.g. The Calculator class has methods like add, subtract, multiple, divide. Nothing extra!!! All methods are directly related to performing calculations)
 *
 * Low Coupling refers to the degree to which components depend on each other.
 * How much do your components depend on each other? How easy is it to change one component without modifying another one?
 * (e.g. The Smartphone class can work with the Calculator class without knowing any details how the Calculator class is implemented)
 *
 * The Law of Demeter. (LoD)
 * "Only talk to your immediate (closest) neighbors, or in other words: use only one dot."
 *
 * The essence of this rule is that an object should avoid calling methods on another object returned by a third object.
 */

class Employee {
  constructor(
    private title: string,
    private salary: number,
    private _isActive: boolean
  ) {}

  getSalaryInfo() {
    if (!this.isActive()) {
      throw new Error(`${this.getTitle()} is inactive employee.`);
    }
    return this.salary;
  }

  getTitle() {
    return this.title;
  }

  isActive() {
    return this._isActive;
  }
}

class PayrollService {
  // Bad
  identifyEmployee(employee: Employee) {
    if (!employee.isActive()) {
      throw new Error(`${employee.getTitle()} is inactive employee.`);
    }
    return employee;
  }

  // Good
  getPayrollForEmployee(employee: Employee) {
    const salary = employee.getSalaryInfo();
    return salary + salary * this.calculateCurrentMonthBenefits();
  }

  private calculateCurrentMonthBenefits() {
    // some logic here...
    return 0.5;
  }
}

const employee = new Employee("Software Engineer", 500, true);

const badExample = new PayrollService()
  .identifyEmployee(employee)
  .getSalaryInfo();
console.log(`[Bad]. The ${employee.getTitle()} salary is ${badExample}`);

const goodExample = new PayrollService().getPayrollForEmployee(employee);
console.log(`[Good]. The ${employee.getTitle()} salary is ${goodExample}`);

export default void 0;
