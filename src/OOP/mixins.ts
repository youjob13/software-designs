/**
 * Mixins is another OOD tool for sharing role behavior. (BEHAVE-AS relation)
 * * TS decorators is another tool that works in a similar manner.
 */

class Schedule {
  isScheduled(schedulable: any, starting: number, ending: number) {
    console.log(
      `Checking if ${schedulable.constructor.name}` +
        `is available on ${starting} - ${ending}`
    );

    //do the checks

    return true;
  }
}

const SchedulableMixin = (superclass: any) =>
  class extends superclass {
    private _schedule!: Schedule;
    protected leadDays = 0;

    set schedule(schedule) {
      this._schedule = schedule;
    }

    get schedule() {
      return this._schedule || new Schedule();
    }

    isSchedulable(starting: number, ending: number) {
      const withLeadDays = starting - this.leadDays;

      return this.schedule.isScheduled(this, withLeadDays, ending);
    }
  };

class Bicycle extends SchedulableMixin(Object) {
  protected leadDays = 1;
}

class Vehicle extends SchedulableMixin(Object) {
  protected leadDays = 3;
}

class Mechanic extends SchedulableMixin(Object) {
  protected leadDays = 4;
}

export {};

/**
 * Recognize the Antipatterns.
 * - Using variables to determine a type of object and send it a message.
 * - Using direct object type checking or switch-case.
 *
 * Insist on the Abstraction.
 * Superclass (or mixin, or decorator) should not contain a code which is only applied for some subclasses.
 */
