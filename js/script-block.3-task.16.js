// <<<----------------- TASK ----------------->>

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
  }

  // Change code above this line
  return totalSalary;
}
console.log({});
console.log({ mango: 100, poly: 150, alfred: 80 });
console.log({ kiwi: 200, poly: 50, ajax: 150 });
