// Практика. Модуль 3. Занятие 2.
console.log("Практика. Модуль 3. Занятие 2.");

//
// Операция spread (распылление)
//

// 1. Старый метод сшивания concat

// const numbers = [1, 2, 3].concat([4, 5, 6], 7, 8);

// console.log(numbers);

// 2. Новый метод сшивания spread (...)

// const numbers = [0, 5, 10, ...[1, 2, 3]];

// console.log(numbers);

//
// Поиск самой маленькой или большой температуры
//

// const temps = [1, 5, 10, -5];

// console.log(Math.max(...temps));

//
// Сшиваем несколько массивов в один через spread
//

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

// console.log(allTemps);

//
// Распыление обьектов
// Object.prototype.assign() и spread
//

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({ name: "Mango" }, a, b);

// console.log(c);

//
// Современный синтаксис
//

// const c = {
//   word: "Mango",
//   ...a,
//   ...b,
// };

// console.log(c);

//
// Деструктуризация обьекта
// Значения по умолчанию
// Тия переменой отличие от имени свойства
//

// const playlist = {
//   title: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track - 1", "track - 2", "track - 3"],
//   trackCount: 3,
// };

// const { title, rating, tracks, trackCount } = playlist;

// console.log(title, rating, tracks, trackCount, (author = "Michael Jackson"));

// console.log(title);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);
// console.log(author);

//
// Глубокая деструктуризация
//

// const profile = {
//   name: "Michael Jordan",
//   tag: "MJ",
//   place: "LA, USA",
//   avatar: "https://www.biography.com/athlete/michael-jordan",
//   stats: {
//     followers: 15000000,
//     views: 1000000,
//     likes: 7000000,
//   },
// };

// const {
//   name,
//   tag,
//   place,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// const { followers, views, likes } = stats;

// console.log(name, tag, place, avatar, followers, views, likes);

//
// Деструктуризация массивов
//

// const rgb = [100, 200, 300];

// const [red, green, blue] = rgb;

// console.log(red);

// const authors = {
//   kiwi: 9,
//   poly: 6,
//   ajax: 3,
//   mango: 1,
// };

// const entries = Object.entries(authors);

// for (const entry of entries) {
//   const [name, rating] = entry;
//   console.log(name, rating);
// }

// //
// // Операция rest (сбор)
// //

// const firstPerson = {
//   name: "Michael Jordan",
//   tag: "MJ",
//   place: "LA, USA",
//   avatar: "https://www.biography.com/athlete/michael-jordan",
//   stats: {
//     followers: 15000000,
//     views: 1000000,
//     likes: 7000000,
//   },
// };

// const { name, tag, place, ...restProps } = firstPerson;
// console.log(firstPerson);
// console.log(restProps);

//
// Паттерн "Обьект настроек"
// - деструктуризация параметра-обьекта в подписи функции
// - rest при деструктаризации в подписи
//

const showProfileInfo = function (userProfile) {
  const { name, tag, place, avatar, stats } = userProfile;
  console.log(userProfile);
};

const profile = {
  name: "Michael Jordan",
  tag: "MJ",
  place: "LA, USA",
  avatar: "https://www.biography.com/athlete/michael-jordan",
  stats: {
    followers: 1555,
    views: 1033,
    likes: 756,
  },
};

showProfileInfo(profile);

//
// Работаем с коллекцией товаров в корзине!
// getItems()
// add(product)
// remove(productName)
// clear()
// countTotalPrice()
// increaseQuantity(productName)
// decreaseQuantity(productName)
//
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍑', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log("нашли такой продукт -", productName);
        console.log("индекс товара -", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    console.log(this.items);

    let total = 0;

    for (const item of this.items) {
      console.log(item);
      total += item.price;

      return total;
    }
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍑", price: 110 });

console.table(cart.getItems());

console.log("Итого: ", cart.countTotalPrice());

cart.remove("🍎");

console.table(cart.getItems());

cart.clear();

console.log(cart.getItems());
