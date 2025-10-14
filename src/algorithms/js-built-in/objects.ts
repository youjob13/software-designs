/**
 * Доступ к свойствам объекта / добавление / удаление свойств
 * O(1) time complexity for access and assignment operations, because objects in JavaScript are implemented as hash tables
 * O(n) space complexity, where n is the number of properties in the object
 */

const obj: { [key: string]: number } = {};
obj["a"] = 1; // { a: 1 }
obj["b"] = 2; // { a: 1, b: 2 }
obj["a"]; // 1
obj["b"]; // 2
