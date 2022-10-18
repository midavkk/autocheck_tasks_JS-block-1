// <<< ----------------- EXAMPLE-1 ----------------->>>
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// console.log(multiply(1, 2));

// <<< ----------------- EXAMPLE-2 ----------------->>>
// function showName(firstName, lastName, ...titles) {
//   alert(firstName + " " + lastName); // Юлий Цезарь
//   // Оставшиеся параметры пойдут в массив
//   titles = ["Консул", "Император"];
//   alert(titles[0]); // Консул
//   alert(titles[1]); // Император
//   alert(titles.length); // 2
// }
// showName("Юлий", "Цезарь", "Консул", "Император");

// <<<----------------- TASK - ЗАДАЧА. ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ ----------------->>
// Change code below this line
function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
  // Change code above this line
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
