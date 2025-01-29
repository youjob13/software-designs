/**
 * The Dependency Inversion Principle - high-level modules shouldn't depend on low-level modules. Both should depend on abstractions.
 * Abstractions shouldn't depend on details. Details should depend on abstractions.
 */

/**
 * Benefits:
 * - Loose Coupling. Increasing flexibility. Changes in low-level modules won't affect high-level modules.
 * - Easier testing. You can write unit tests and use mocks.
 */

/** <-- Bad Example --> */

class JiraService_ {
  addTime(task: unknown, time: number) {}
}

class EmployeeService_ {
  private activityTrackingService = new JiraService();

  trackTime(task: unknown, time: number) {
    // some logic here...
    this.activityTrackingService.addTime(task, time);
  }
}

/** <-- Bad Example --/> */

/** <-- Good Example --> */

interface IActivityTracker {
  addTime<T>(task: T, time: number): void;
}

class JiraService implements IActivityTracker {
  addTime(task: unknown, time: number) {}
}

class EmployeeService {
  private activityTrackingService: IActivityTracker;

  constructor(activityTrackingService: IActivityTracker) {
    this.activityTrackingService = activityTrackingService;
  }

  trackTime(task: unknown, time: number) {
    // some logic here...
    this.activityTrackingService.addTime(task, time);
  }
}

/** <-- Good Example --/> */
