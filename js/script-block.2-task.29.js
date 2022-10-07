// Напиши функцию getEvenNumbers(start, end) которая возвращает массив
// всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end
// возвращает правильный массив

function getEvenNumbers(start, end) {
  // Change code below this line
  let array = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
  // Change code above this line
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));

// 1. добавляем в массив недостающие значения POP
// 2. перебираем массив фор- оф
// 3. путем деления на 2 находим нулевой остаток = четное число
// 4. иф === совпадает пушим в новый массив

// const start = 2;
// const end = 5;
// let array = [];

// for (let i = start; i < end; i += 1) {
//   if (i % 2 === 0) {
//     array.push(i);
//   }
//   console.log(array);
// }

// let evenArray = [];
//   if (resultArray[j] % 2 === 0) {
//     evenArray = array.push(resultArray[j]);
//     // console.log(evenArray);
//   }
