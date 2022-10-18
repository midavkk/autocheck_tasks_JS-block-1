// <<< ----------------- EXAMPLE - 1 ----------------->>>
// ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");
// <<<----------------- TASK - ЗАДАЧА. МЕТОДЫ ОБЪЕКТА ----------------->>
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};
console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune"));
