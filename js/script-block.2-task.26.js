// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.

// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice([]) возвращает 0
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  //   for (let i = 0; i < order.length; i += 1) {
  //     total += order[i];
  //   }

  for (const index of order) {
    total += index;
  }
  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(
  calculateTotalPrice([12, 85, 37, 4, 164, 48, 291, 412, 371, 94, 63, 176])
);
