// <<< ----------------- EXAMPLE-1 ----------------->>>
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
// }

// <<<----------------- TASK - ЗАДАЧА. ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА В ФУНКЦИИ ----------------->>
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const result = {
    category: category,
    priority: priority,
    completed: completed,
    ...data,
  };
  return {
    category,
    priority,
    ...data,
    completed,
  };
  // <<<------------ альтернативное решение ------------>>>
  //   const arg = { ...{ completed, category, priority }, ...data };
  //   return { ...{ category, priority, completed }, ...data };

  // Change code above this line
}
console.log(makeTask());
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));
