// <<<------------- EXAMPLE ------------->>>

// Функция с побочными эффектами
// const dirtyMultiply = (array, value) => {
//   //   console.log(array);
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// Чистая функция (pure function)
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// <<<------------- TASK - ЧИСТЫЕ ФУНКЦИИ ------------->>>

const changeEven = (numbers, value) => {
  // Change code below this line
  const newArray = [];
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] % 2 === 0) {
  //       numbers[i] = numbers[i] + value;
  //     }
  //     }
  numbers.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element + value);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
  // Change code above this line
};
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
