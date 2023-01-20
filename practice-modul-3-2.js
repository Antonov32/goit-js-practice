// Практика. Модуль 3. Занятие 2.
console.log("Практика. Модуль 3. Занятие 2.");

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
//

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍑", price: 110 });
