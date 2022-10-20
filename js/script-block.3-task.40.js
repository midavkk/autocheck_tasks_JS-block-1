// <<< ----------------- EXAMPLE - 1 ----------------->>>
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// <<<----------------- TASK - ЗАДАЧА. ОБНОВЛЯЕМ ЗЕЛЬЕ ----------------->>
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
    return this.potions;
    // Change code above this line
  },
};
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
