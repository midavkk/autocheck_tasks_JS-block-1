// <<<------------- EXAMPLE ------------->>>
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// <<<------------- TASK - МЕТОД FOREACH(CALLBACK) ------------->>>
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  //   for (let i = 0; i < orderedItems.length; i += 1) {
  //     totalPrice += orderedItems[i];
  //     }
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
