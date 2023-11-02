//! Оператори порівняня (true або false)

// console.log(5 > 4); // true
// console.log(10 >= "7"); // true

//всі строки порівнюються за лексикографічним словником (таблиця Юнікодів)

// console.log("2" > "12"); // 50 > 49 ("2" = 50; "1" = 49)
// console.log("2".charCodeAt(0)); // charCodeArt - число кожного символу в таблиці Юнікодів
// console.log("1".charCodeAt(0));

// console.log("2" > "21"); // "21" більше за змістом символів тому false

// console.log("P".charCodeAt(0)); // 80
// console.log("Papaya" < "papaya"); // true ("80" < "112")
// console.log("p".charCodeAt(0)); // 112

// 1. Порівння зі зведенням типів даних "==" (не суворе порівняння)

// console.log("4" == 4); // true
// console.log(false == 0); // true

// 2. Порівння без зведення типів даних "===" (суворе порівняння)

// console.log("6" === 6); // false
// console.log("Papaya" === "papaya"); // false

// В JS при порівнянні(==) значення undefined і null є рівними, тобто, повертають true. В тей самий час, при порівнянні(==) undefined і  null з усим іншим ви будете отримувати false.

// console.log(undefined == null); // true
// console.log(null == "null"); // false
// console.log(null == 0); // false

// При порівнянні через (>, <, >=, <=) null буде приводитись до 0, а undefined буде приводитись до NaN

// console.log(0 > null); // false -> 0 > 0
// console.log(0 >= null); // true -> 0 >= 0

// console.log(null == undefined); // true
// console.log(null == 0); // false
// console.log(null == "0");
// console.log(null == "null");
// console.log(undefined == 0);
// console.log(undefined == "undefined");
// console.log(undefined == undefined); // true

// console.log(null > 0); // 0 > 0 -> false
// console.log(null >= 0); // 0 >= 0 -> true

//! Арефметичні функції

//* - Number.parseInt - цей метод витягує зі строки ціле число;

// let elementWidth = "250px";
// console.log("elementWidth: ", Number.parseInt(elementWidth));

//* - Number.parseFloat - цей метод витягує зі строки дробове число;

// let elementHeight = "250.77px";
// console.log("elementHeight: ", Number.parseFloat(elementHeight));

//* - Метод "Math"

// const value = 27.5;
// Math.floor() - округлення вниз
// console.log(Math.floor(value));
// Math.ceil() - округлення вгору
// console.log(Math.ceil(value));
// Math.round() - округлення вгору(якщо дробова частина >= 0.5) або округлення вниз(якщо дробова частина < 0.5)
// console.log(Math.round(value));

//! Функції

/* - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// DRY (Do Not Repeat Yourself) - не повторюй сам себе, якщо ви бачите що в вашому коді якісь частини повторюються - цей код потрібно винести у функцію. Функція завжди повинна виконувати одну дію(не означає одну строку коду, означає одну завершену логічну дію).

// Function Declaration - оголошення функції

/*
 * function - оголошення функції
 * greeting - назва функції(дієслово) - індетифікатор функції
 * () - список параметрів
 * msg - параметр, це внутрішня змінна яка доступна тільки всередині функції. Параметр отримує своє значення тільки тоді, коли ви викликаєте функцію. Значенням параметру виступає аргумент.
 * {} - тіло функції
 */
// let b = 10;

// function greeting(msg) {
//   let a = 5;
//   console.log(`You say: ${msg}`);
//   console.log(a);
//   console.log(b);
// }
// console.log(a)

// greeting("My name is Alex");
// console.log(1);
// greeting("Hello!"); //  Виклик функції(виклик того коду, який ми описали всередині) greeting - назва, () - список аргументів, "Hello!" - аргумент, який стане значенням відповідного параметру всередині функції
// console.log(2);
// greeting("Nice to meet you");

// Кожна функція в джс завжди щось повертає(якесь значення яке є результатом роботи функції). Для повернення значення у зовнішній код на місце виклику функції використовується оператор return. Але, якщо цього оператору немає - функція повертає undefined.

// function add(a, b) {
// return a + b;
// }

// console.log(add(5, 4)); // 9
// console.log(add(10, 3)); // 13
// console.log(add(994, 6)); // 1000

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

/*
1. замінити кому на крапку
2. привести строки до чисел
3. рахуємо індекс маси тіла поділивши вагу на квадрат висоти
4. округлюємо до 1 цифри після коми

*/

// function convertToDecimal(value) {
//   return Number(value.replace(",", "."));
// }

// function calcBMI(weight, height) {
//   weight = convertToDecimal(weight);
//   height = convertToDecimal(height);

//   const result = weight / height ** 2;

//   return Number(result.toFixed(1));
// }

// const bmi = calcBMI("88,3", "1,75");
// console.log(bmi); // 28.8

// console.log(calcBMI("90,6", "1,93"));
