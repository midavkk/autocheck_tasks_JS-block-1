// Напиши функцию calculateTotalPrice(order), которая принимает один параметр
// order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается,
//     как результат работы функции.
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const value of order) {
    total += value;
  }
  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(
  calculateTotalPrice([412, 371, 94, 63, 176, 164, 48, 291, 12, 85, 37, 4])
);

// const order = [12, 85, 37, 4];
// 1. объявить переменную totalPrice
// let totalPrice = 0;
// 2. перебрать массив
// for (let i = 0; i < order.length; i += 1) {
//   console.log(order[i]);
// 3.каждый элемент приплюсовать к totalPrice
//   totalPrice += order[i];
// }
// console.log("Total: ", totalPrice);

// for (const value of order) {
//   totalPrice += value;
// }
// console.log("Total: ", totalPrice);
