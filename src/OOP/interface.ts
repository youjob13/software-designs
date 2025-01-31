/**
 * Interface helps objects in OOP communicate with each other.
 *
 * The presence of interfaces allows you to think about the task in a more abstract way, ignoring minor details.
 *
 * Public interfaces:
 * - Reveal its primary responsibility.
 * - Are expected to be invoked by others.
 * - Will not change on a whim.
 * - Are safe for others to depend on.
 * - Are thoroughly documented in the tests.
 *
 * Private interfaces:
 * - Handle implementation details.
 * - Are not expected to be sent by other objects.
 * - Can change for any reason whatsoever.
 * - Are unsafe for others to depend on.
 * - May not even be referenced in the tests.
 */

/**
 * Interface vs Abstract Class
 *
 *      | Parameters |                     | Interface |                    | Abstract class |
 *
 *    Multiple inheritance           Implement several interfaces         Only one abstract class
 *    Structure                      Abstract methods                     Abstract & concrete methods
 *    When to use                    Future enhancements                  To avoid independence
 *    Adding new methods             Could be hard                        Easy to do
 *    Access modifiers               Only public                          Public, protected, private
 *    Usage                          Defines the peripheral               Defines the identity of a class
 *                                   abilities of class
 *
 *
 * Reasons for using interfaces:
 * - Interfaces are used to achieve abstraction.
 * - It helps you to achieve loose coupling.
 *
 * Reasons for using abstract classes:
 * - Abstract classes offer default functionality for the subclasses.
 * - Provides a template for future specific classes.
 * - Allows code reusability.
 */
