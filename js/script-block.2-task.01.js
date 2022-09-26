// Запиши условие в инструкции if так, чтобы функция работала правильно.
// 1. Объявлена функция checkAge(age).
// 2. В выражении проверки возраста использован оператор >=
// 3. Вызов checkAge(20) возвращает "You are an adult"
// 4. Вызов checkAge(8) возвращает "You are a minor"
// 5. Вызов checkAge(14) возвращает "You are a minor"
// 6. Вызов checkAge(38) возвращает "You are an adult"
// 7. В теле функции есть только одна инструкция if
// 8. В теле функции нет инструкции else или else if

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }
  return "You are a minor";
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));
