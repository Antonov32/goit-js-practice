// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.slice().toUpperCase();
//   } else {
//     return input.slice().toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

//*
//
// ------------------------------------------------------------
//
//*

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// Оголошена функція getFileName(file)
// Виклик функції getFileName("styles.css") повертає "styles"
// Виклик функції getFileName("app.js") повертає "app"
// Виклик функції getFileName("app") повертає "app"
// Виклик функції getFileName("index.js") повертає "index"
// Виклик функції getFileName("index.html") повертає "index"
// Виклик функції getFileName("index.css") повертає "index"
// Виклик функції getFileName("index") повертає "index"

// function getFileName(file) {
//   const fileIndex = file.indexOf(".");

//   if (file.includes(".")) {
//     return file.slice(0, fileIndex);
//   } else {
//     return file;
//   }
// }

// console.log(getFileName("styles.css")); // повертає "styles"
// console.log(getFileName("app.js")); // повертає "app"
// console.log(getFileName("styles")); // повертає "styles"
// console.log(getFileName("app")); // повертає "app"
// console.log(getFileName("index.js")); // повертає "index"
// console.log(getFileName("index.html")); // повертає "index"
// console.log(getFileName("index.css")); // повертає "app"
// console.log(getFileName("index")); // повертає "index"

//*
//
// ------------------------------------------------------------
//
//*

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// Оголошена функція createFileName(name, ext)
// Виклик функції createFileName(" order ", "txt") повертає "order.txt"
// Виклик функції createFileName(c) повертає "report.csv"
// Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const trimmedExt = ext.trim();
//   return `${trimmedName}.${trimmedExt}`;
// }

// console.log(createFileName(" order ", "txt")); // повертає "order.txt"
// console.log(createFileName("report ", "csv")); // повертає "report.csv"
// console.log(createFileName(" presentation", "xml")); // повертає "presentation.xml"

//*
//
// ------------------------------------------------------------
//
//*

// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let result = 0;
//   let index = 0;
//   while (number > index) {
//     index += 1;
//     result += index;
//   }
//   return result;
// }

// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(0)); // повертає 0
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300
// console.log(calculateTotal()); // повертає правильне значення

//*
//
// ------------------------------------------------------------
//
//*

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

function calculateEvenTotal(number) {
  let result = 0;
  let index = 0;
  for (let i = 0; i < number; i--) {
    index += 1;
    result += index;
  }
  return result;
}

console.log(calculateEvenTotal(1)); // повертає 0
console.log(calculateEvenTotal(3)); // повертає 2
console.log(calculateEvenTotal(7)); // повертає 12
console.log(calculateEvenTotal(18)); // повертає 90
console.log(calculateEvenTotal(27)); // повертає 182
console.log(calculateEvenTotal()); // з випадковим числом повертає правильне значення
