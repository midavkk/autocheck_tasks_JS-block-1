// <<< ----------------- EXAMPLE - 1 ----------------->>>
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ["Последнее королевство"], getBooks: f}

// <<< ----------------- EXAMPLE - 2 ----------------->>>
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Последнее королевство"]
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

// <<<----------------- TASK - ЗАДАЧА. ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ ----------------->>
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
    // Change code above this line
  },
};
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"),
//     значение свойства books это массив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"),
//     значение свойства books это массив["Dune", "Haze", "The guardian of dreams"]
