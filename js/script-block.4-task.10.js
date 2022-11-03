// <<<------------- EXAMPLE ------------->>>
const numbers = [5, 10, 15, 20, 25];

// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// <<<------------- TASK - СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ ------------->>>
// Change code below this line
// function calculateTotalPrice(orderedItems)
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  //   orderedItems.forEach(function (item) {
  //     totalPrice += item;
  //   });
  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
// Change code above this line
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
