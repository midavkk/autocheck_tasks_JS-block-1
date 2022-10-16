// <<< ----------------- EXAMPLE-1 ----------------->>>

// const temps = [14, -4, 25, 8, 11];
// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// <<< ----------------- EXAMPLE-2 ----------------->>>

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// <<<----------------- TASK - ЗАДАЧА. ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА ----------------->>
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
console.log(allScores);
const bestScore = Math.max(...allScores);
console.log(bestScore);
const worstScore = Math.min(...allScores);
console.log(worstScore);
