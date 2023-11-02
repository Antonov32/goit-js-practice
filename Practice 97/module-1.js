// let a;
// console.log(a); // змінна була оголошена, але ще не була ініціалізована значенням

// let b = null;
// console.log(b); // явно вказує на відсутність значення та часто використовується розробниками для позначення порожнього значення

// let scroll = "30";

// console.log(typeof scroll);
// console.log(typeof true);
// console.log(typeof 5);
// console.log(typeof null);
// console.log(typeof undefined);

// const c = 20;
// const d = 12;

// console.log(c + d);
// console.log(c - d);
// console.log(c / d);
// console.log(c * d);
// console.log(c % d); // операція остачення от ділення
// console.log(c ** d); // операція возведення в степінь

// let gadgets = 100;
// gadgets += 50; //скорочений або комбінований оператор
// console.log(gadgets);

// const result = 200 + 300 - 15 * 5; // пріоритет операторів, як і в математиці.
// console.log(result);

// const firstName = "Eric";
// const lastName = "Batler";

// const fullName = firstName + " " + lastName;
// console.log(fullName); // конкатенація рядків

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2); // шаблоні рядки

//* Явне перетворення типів

// console.log(String(5)); // 5
// console.log(String(true)); // true
// console.log(String(false)); // false
// console.log(String(null)); // null

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("hello")); // NaN
// console.log(Number("123a")); // NaN

// console.log(Boolean(5)); // true
// console.log(Boolean(-5)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(NaN)); // false

//* Неявне перетворення типів (старайтесь використовувати тільки явне претворення типів дани х)

// console.log("5" + 3); // "53"
// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // 5undefined
// console.log(3 + "5"); // "35"
// console.log(null + true); // 1
// console.log("5" - 2); // 3
// console.log("hello" - 2); // NaN
