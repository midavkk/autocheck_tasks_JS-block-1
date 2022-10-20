// <<<----------------- TASK - ЗАДАЧА. РАСШИРЯЕМ ИНВЕНТАРЬ ----------------->>
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    return this.potions;
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return `Potion ${oldName} is not in inventory!`;
      }
    }
    return this.potions;
  },
  // Change code above this line
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
