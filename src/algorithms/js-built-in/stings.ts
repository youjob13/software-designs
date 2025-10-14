/**
 * Слияние строк
 * O(n) time complexity, where n is the length of the resulting string, потому что нужно скопировать все символы из обеих строк в новую строку
 * O(n) space complexity, где n - длина результирующей строки, потому что создается новая строка
 */

const str1 = "abcde";
const str2 = "12345";
str1.concat(str2); // "abcde12345"
