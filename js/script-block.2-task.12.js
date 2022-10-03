// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она
//  возвращала в переменной string результат соединения элементов массива array
//  c разделителем delimiter - строку.

// Объявлена функция makeStringFromArray(array, delimiter)
// Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// возвращает "Mango hurries to the train"
// Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")
// возвращает "Mango"
// Вызов makeStringFromArray(["top", "picks", "for", "you"], "_")
// возвращает "top_picks_for_you"

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);
  // Change code above this line
  return string;
}
console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'
