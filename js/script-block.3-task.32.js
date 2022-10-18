// <<< ----------------- EXAMPLE-1 ----------------->>>
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// <<<----------------- TASK - ЗАДАЧА. ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ ----------------->>
// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;
  for (const arg of args)
    if (arg > firstNumber) {
      total += arg;
    }
  return total;
  // Change code above this line
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
