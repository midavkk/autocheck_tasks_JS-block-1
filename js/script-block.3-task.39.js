// <<<----------------- TASK - ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ ----------------->>
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    potionName = this.potions.indexOf(potionName);
    this.potions.splice(potionName, 1);
    return this.potions;
    // Change code above this line
  },
};
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
