// Практика. Модуль 3. Занятие 1.
console.log("Практика. Модуль 3. Занятие 1.");

//
// Доступ к свойству
//

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track - 1", "track - 2", "track - 3"],
//   trackCount: 3,
// };

// playlist.boom = 5;

// console.log(playlist);

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);

//
// Редко используеться через эту переменную поиск ключа
//

// const propertyName = "tracks";
// console.log(playlist[propertyName]);

//
// Короткая запись свойств
//

const username = "Mango";
const email = "mango@gmail.com";

const signData = {
  username: username,
  email: email,
};

console.log(signData);

//
// Если имя свойства и имя переменой совпадает, то используем короткую запись!!!
//

const signData2 = {
  username,
  email,
};

console.log(signData2);

//
// Вычисляемые свойства
//

const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

//
// Ссылочный тип {} === {}
//

const a = { x: 1, y: 2 };
const b = a;

console.log({ a: 1 } === { a: 2 });
// Правильная форма вывода
console.log(b === a);
// Добавляем свойства в переменную
a.c = 3;
console.log(a);

//
// Масивы и функции это обьекты
//

const d = [1, 2, 3];

d.smile = ":-)";

console.log(d);

// Тоже самое с функцией

const fn = function () {
  console.log("hello");
};

fn.hello = ":-)";

console.dir(fn);

//
// Методы обьекта и this при обращение к свойствам методу
//

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["track - 1", "track - 2", "track - 3"],
  trackCount: 3,
  getName() {
    console.log("Да, это медод :)");
  },
};

playlist.getName();

//
// Метод this
//

const album = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["track - 1", "track - 2", "track - 3"],
  trackCount: 3,
  changeName(newName) {
    console.log("this внутри changeName: ", this);
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

album.changeName("Новое имя");

album.addTrack("Новый трек");

album.updateRating(4);
console.log(album);

//
// Перебор через for...in и Object.keys|values|entries
//

// Перебрать метод (for...of)

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
let total = 0;

// Массив ключей

const keys = Object.keys(feedback);

console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}

console.log("totalFeedback:", totalFeedback);

// Массив значений

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);
  total += value;
}

console.log("total: ", total);

//
// Работа с массивом обьектов (коллекция)!
//

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend.name);

  // в for...of получаем ссылку на этот объект, можна его менять (добавлять элементы...)

  friend.newprop = 777;
}

console.table(friends);

// Ищем друга по имени

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

    if (friend.name === friendName) {
      return "FOUND!";
    }
  }

  return "NOT FOUND!";
};

console.log(findFriendByName(friends, "Mango"));
console.log(findFriendByName(friends, "Orange"));

// Получаем имена всех друзей

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};

console.log(getAllNames(friends));

//
// Получаем имена друзей которые онлайн
//
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online === true) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

//
// Получаем всех друзей которые оффлайн
//

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));
