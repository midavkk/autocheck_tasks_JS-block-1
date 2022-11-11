// <<<------------- EXAMPLE ------------->>>
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const courses = students.map((student) => student.courses);
// console.log(courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// const flatCourses = students.flatMap((student) => student.courses);
// console.log(flatCourses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// <<<------------- TASK - Метод flatMap() ------------->>>
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap((book) => book.genres);
console.log(genres);
