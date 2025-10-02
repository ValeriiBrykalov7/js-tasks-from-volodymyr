// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance.
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100.
//  В іншому випадку функцію повинна повернути рядок "Goodbye".

// function checkAccess(age, balance) {
//     return age >= 18 && balance >= 100 ? "Wellcome" : "Goodbye";
// }

// console.log(checkAccess(54, 222));

// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару(amount) та його вартість(price).
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000,
// в іншому випадку функція повинна повернути рядок "Це занадто дорого".

// function checkPrice(amount, price) {
//     const totalPrice = amount * price;
//     return totalPrice <= 1000 ? "Ми це купуємо" : "Це занадто дорого";
// }

// console.log(checkPrice(54, 2));

// Задача-3
// Напишіть функцію, яка приймає температуру(temp) в градусах Цельсія.
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".

// function checkTemp(temp) {
//     if (temp < 0) {
//         return "Замерзає";
//     }
//     else if (temp <= 25) {
//         return "Нормальна температура";
//     }
//     else {return "Спекотно"}
// }

// console.log(checkTemp(-5));

// // Задача-4
// // Напишіть функцію, яка приймає 2 числа: number та divisor.
// // Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться",
// //    в іншому випадку поверніть "Не ділиться".

// function checkDiv(number, divisor) {
//     return number % divisor === 0 ? "Ділиться" : "Не ділиться";
// }
// console.log(checkDiv(5, 2));

// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining(булевий) і hasUmbrella(булевий).
//  Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш",
//     в іншому випадку поверніть "Без дощу".

// function checkIsRain(isRaining, hasUmbrella) {
//     if (isRaining && hasUmbrella) {
//         return "Не змокнеш"
//     }
//     else if (isRaining && !hasUmbrella) {
//         return "Змокнеш";
//     }
//     else {
//         return "Без дощу";
//     }
// }

// console.log(checkIsRain(false, true));

// Задача-6
// Напишіть функцію, яка приймає оцінку студента(grade) за шкалою від 0 до 100.
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

// function checkGrade(grade) {
//     if (grade >= 90) {
//         return "Відмінно"
//     }
//     else if (grade >= 75) {
//         return "Добре"
//     }
//     else if (grade >= 50) {
//         return "Задовільно"
//     }
//     else {
//         return "Незадовільно"
//     }
// }

// console.log(checkGrade(78));

// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday.
//  Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний",
// в іншому випадку поверніть "Робочий день".

// function checkIsHoliday(dayOfWeek, isHoliday) {
//     return isHoliday || dayOfWeek === "Saturday" || dayOfWeek === "Sunday"
//     ? "Вихідний"
//     : "Робочий день";
// }

// console.log(checkIsHoliday("Saturday", false));

// Задача-8
// Напишіть функцію, яка приймає один параметр year.
// Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік",
// в іншому випадку - "Звичайний рік".
// function checkYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Високосний рік" : "Звичайний рік";
// }

// console.log(checkYear(2024));

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation(булевий) і isFriend(булевий).
// Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені",
//     в іншому випадку поверніть "Вхід заборонено".

// function checkAccess(hasInvitation, isFriend) {
//     return hasInvitation || isFriend ? "Ви запрошені" : "Вхід заборонено";
// }

// console.log(checkAccess(true, false));

// Задача-10
// Напишіть функцію, яка приймає вік особи(age).
// Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function checkAge(age) {
//     switch (true) {
//         case age < 12: return "Дитина";
//             break;
//         case age < 18: return "Підліток";
//             break;
//         case age < 60: return "Дорослий";
//             break;
//         case age >= 60: return "Пенсіонер";
//             break;
//     }
// };

// console.log(checkAge(13));

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn(булевий) та hasAdminRights(булевий).
// Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".f

// function access(isLoggedIn, hasAdminRights) {
//     return hasAdminRights ? "Адмін-сторінка" : (isLoggedIn ? "Користувач" : "Гість");
// }

// console.log(access(true, true));

// Задача-12
// Напишіть функцію, яка приймає один параметр speed.
// Якщо швидкість менша за 60 км / год, поверніть "Безпечно", якщо від 60 до 100 км / год, поверніть "Увага", якщо більше 100 км / год, поверніть "Небезпечно".

// function checkSpeed(speed) {
//     const numericSpeed = parseInt(speed); // перетворюємо на число один раз
//     if (numericSpeed < 60) {
//         return "Безпечно";
//     } else if (numericSpeed < 100) {
//         return "Увага";
//     } else {
//         return "Небезпечно";
//     }
// }

// console.log(checkSpeed("100 км / год"));

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend.Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня",
//     якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

// function checkDay(time, isWeekend) {
//     if (time < 12 && isWeekend === false) {
//         return "Ранок буднього дня";
//     } 
//     else if (time < 18 && isWeekend === true) {
//         return "День вихідного дня";
//     }
//     else {return "Вечір"}
// }

// console.log(checkDay(11, false));