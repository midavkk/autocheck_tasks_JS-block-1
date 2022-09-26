// JavaScript 2.0
// Модуль 2 - Масиви. Функції
// JS V2 block-2
// ЗАДАЧА 2/32
// ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// 1. удали переменную message
// 2. удали else
// 3. код должен работать так же, как и до оптимизации
// 4. Объявлена функция checkPassword(password)
// 5. Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// 6. Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// 7. Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
  // Change code above this line
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));
