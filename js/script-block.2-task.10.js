// Дополни код функции splitMessage(message, delimiter) так,
// чтобы она возвращала в переменной words результат разделения строки
// message по разделителю delimiter - массив строк.

// Объявлена функция splitMessage(message, delimiter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
  words = message.split(delimiter);
  // Change code above this line
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
