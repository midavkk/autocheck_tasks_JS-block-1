// Напиши функцию filterArray(numbers, value), которая принимает массив чисел
//     (параметр numbers) и возвращает новый массив, в котором будут только те
// элементы массива numbers, которые больше чем значение параметра value(число).

// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает
// правильный массив. В цикле for использовался метод push

function filterArray(numbers, value) {
  // Change code below this line
  let Array = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      Array.push(numbers[i]);
    }
    // Change code above this line
  }
  return Array;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// 1. перебрать массив и сравнить, если номер больше валью
// const numbers = [1, 2, 3, 4, 5];
// const value = 3;
// let array = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     array.push(numbers[i]);
//   }
//   console.log(array);
// }
// 2. при выполнении условия - запушить переменную
