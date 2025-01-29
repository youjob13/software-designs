/**
 * #1. High Cohesion and Low Coupling.
 *
 * High Cohesion means that all functions/methods/utils in module are highly connected
 * (e.g. The Calculator class has methods like add, subtract, multiple, divide. Nothing extra!!! All methods are directly related to performing calculations)
 *
 * Low Coupling refers to the degree to which components depend on each other.
 * How much do your components depend on each other? How easy is it to change one component without modifying another one?
 * (e.g. The Smartphone class can work with the Calculator class without knowing any details how the Calculator class is implemented)
 */

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
