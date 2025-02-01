/**
 * #2. Inheritance is not for code reuse, not for sharing behavior. Use composition either than inheritance to share behavior (e.g. Decorator pattern)
 */

/**
 * #3.
 * Covariance.
 * A type T covariant if having S <: P, then T<S> <: T<P>.
 * Output is safe.
 *
 * Contravariance.
 * A type T is contravariant if having S <: P, then T<P> <: T<S>.
 * Input is safe.
 */

// When inheritance is needed? Benefits inheritance over composition and vise versa.
// When it's better to use inheritance rather than composition and vise versa.

/**
 * #4. Composition over inheritance
 * Inheritance is a strongest type of relationships that cannot be broken at runtime.
 * On the other hand, composition can be broken at run time, and you can replace one object in the composition at runtime
 * with another, change the behavior dynamically.
 * So, use Inheritance only when it is necessary.
 */
