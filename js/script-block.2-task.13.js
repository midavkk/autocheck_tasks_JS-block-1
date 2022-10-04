// Напиши функцию slugify(title) которая принимает заголовок статьи,
//     параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// Объявлена функция slugify(title)
// Вызов slugify("Arrays for begginers")
//     возвращает "arrays-for-begginers"
// Вызов slugify("English for developer")
//     возвращает "english-for-developer"
// Вызов slugify("Ten secrets of JavaScript")
//     возвращает "ten-secrets-of-javascript"
// Вызов slugify("How to become a JUNIOR developer in TWO WEEKS")
//     возвращает "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   // Change code below this line

//   // Change code above this line
// }

const title = "Arrays for begginers";
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(" ");
console.table(words);

const slug = words.join("-");
console.log(slug);
