// <<< ----------------- EXAMPLE ----------------->>>

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// <<<----------------- TASK - ЗАДАЧА. ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ ----------------->>
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
console.log(bestScore);
const worstScore = Math.min(...scores);
console.log(worstScore);
