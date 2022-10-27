// <<<------------- EXAMPLE ------------->>>
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// <<<------------- TASK ------------->>>

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым
// аргументом инлайн колбэк - функцию eatPizza(pizzaName), которая логирует строку
// "Eating pizza <имя пиццы>".
// 1. Объявлена функция makePizza
// 2. Функция makePizza принимает два параметра
// 3. Вторым аргументом при вызове makePizza("Ultracheese")
// передана функция eatPizza с единственным параметром pizzaName
