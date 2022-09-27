// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// * available - доступное количество товаров на складе
// * ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
// 1. Объявлена функция checkStorage(available, ordered)
// 2. Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// 3. Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// 4. Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// 5. Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// 6. Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// 7. Вызов checkStorage(150, 0) возвращает "Your order is empty!"

function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
