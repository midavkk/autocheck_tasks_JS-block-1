// <<<------------- EXAMPLE ------------->>>
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }
// // Вызываем функцию greet
// // и выводим результат в консоль
// console.log(greet("Mango"));
// // Добро пожаловать Mango.
// // Выводим функцию greet
// // в консоль не вызывая её
// console.log(greet);
// /*
// ƒ greet() {
//      return `Добро пожаловать ${name}.`;
// }
// */

// <<<------------- TASK ЗАДАЧА. ФУНКЦИЯ КАК ЗНАЧЕНИЕ ------------->>>
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = null;
const pointer = null;

makePizza(result);
console.log(makePizza(result));
makePizza(pointer);
console.log(makePizza);
