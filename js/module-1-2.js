// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//    return str1[0] === str2[str2.length - 1] ? true : false;
// }

// console.log(foo("giant", "jack"));

// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//     return str1[0] === str2[0];
// }
// console.log(foo('knight', 'kengoroo'));

// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2.
//  Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2.
//  В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//     return str1.length === str2.length;
// }

// console.log(foo('knight', 'kengoroo'));

// Задача-4
// Напишіть функцію яка приймає число num.
// Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     const numToStr = num.toString();
//     return numToStr.length % 2 === 0;
// }
// console.log(foo(22));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2.
// // Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2.
// // В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return num1 > num2;
// }
// console.log(foo(222, 22));

// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2.
//  Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі.
//  В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return num1 % num2 === 0;
// }
// console.log(foo(22, 22));

// Задача-7
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є непарним числом.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return num % 2 !== 0;
// }
// console.log(foo(21));

// Задача-8
// Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     return str !== str.toLowerCase();
// }

// console.log(foo("monk"));

// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо довжина str1 більше,
// ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false.


// function foo(str1, str2) {
//     return str1.length > str2.length;
// }
// console.log(foo("Monk", "Monk"));

// Задача-12
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     return str.includes(" ");
// }

// console.log(foo("sss"));

// Задача-14
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку).
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(foo("lalal"));

// Задача-15
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return num1 <= num2;
// }
// console.log(foo(2, 2));

// Задача-17
// Напишіть функцію, яка приймає рядок str.
//  Функція повинна повернути булеве значення true, якщо перша літера str є голосною(a, e, i, o, u).
//  В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     const letters = ["a", "e", "i", "o", "u",];
//     const firstLetter = str[0].toLowerCase();
//     return letters.includes(firstLetter);
// }

// console.log(foo("elbert"));

// Задача-19
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 і num2 рівні.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return num1 === num2;
// }

// console.log(foo(2, 2));

// Задача-20
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num більше або дорівнює нулю.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return num >= 0;
// }
// console.log(foo(2));

// Задача-21
// Напишіть функцію, яка приймає рядок str.
//  Функція повинна повернути булеве значення true, якщо довжина str є парною.
//  В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     return str.length % 2 === 0;
// }

// console.log(foo("pekka"));

// Задача-22
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return (num1 % 2 === 0) && (num2 % 2 !== 0);
// }
// console.log(foo(2, 33));

// Задача-23
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return (num < 200) && (num > 100);
// }

// console.log(foo(199));

// Задача-24
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str) {
//     return str === str.toLowerCase();
// }

// console.log(foo("pekka"));

// Задача-25
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо str1 є частиною str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//     return str1.includes(str2);
// }

// console.log(foo("Monk", "Monk"));

// Задача-26
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є негативним числом.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return num < 0;
// }

// console.log(foo(-1));

// Задача-27
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num1, num2) {
//     return Math.abs(num1 - num2) > 50;
// }

// console.log(foo(12, 333));

// Задача-28
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є нуль.
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return num === 0;
// }

// console.log(foo(0));

// Задача-29
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною(a, e, i, o, u).
// В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//     const array = ['a', 'e', 'i', 'o', 'u'];
//     const lastLetter = str1[str1.length - 1].toLowerCase();
//     return array.includes(lastLetter);
// }

// console.log(foo("tornado"));

// Задача-30
// Напишіть функцію, яка приймає число num
//  Функція повинна повернути булеве значення true, якщо num є кратним 10.
//  В іншому випадку функція повинна повернути булеве значення false.

// function foo(num) {
//     return num % 10 === 0;
// }

// console.log(foo(20));


// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.7;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// // Яким буде результат виразів?

// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

// console.log(undefined === null); // false


// Напиши скрипт який переведе значення totalMinutes (кількість хвилин) рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// function getTime(num) {
//     const hours = Math.floor(num / 60);
//     const minutes = num % 60;

//     const hoursStr = String(hours).padStart(2, 0);
//     const minutesStr = String(minutes).padStart(2, 0);

//     return `${hoursStr}:${minutesStr}`;
// }

// console.log(getTime(50));

// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не дорівнює undefined або null.
//  У в іншому випадку має надаватися значення defaultValue.
//  Перевір роботу скрипта для сліпучих значень змінної incomingValue: null, undefined, 0, false.Використовуй оператор "?"(nullish coalescing operator).

// function refreshValue(incomingValue, defaultValue) {
//     const value = incomingValue ?? defaultValue;
//     return value;
// }
// console.log(refreshValue(false, false));