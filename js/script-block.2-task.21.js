// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string) и
// возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog")
// возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  // Change code below this line
  let words = string.split(" ");
  let longWord = words[0];
  for (const word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Собака лает, а караван идёт"));
