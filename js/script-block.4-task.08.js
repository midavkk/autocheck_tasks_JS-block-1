// <<<------------- EXAMPLE ------------->>>
// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// console.log(arrowAdd(4, 2, 3)); // 9

// <<<------------- TASK - СТРЕЛОЧНЫЕ ФУНКЦИИ. ------------->>>
// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

console.log(calculateTotalPrice(5, 20));
