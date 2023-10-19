let iceCream = window.prompt("What's your favorite ice cream flavor?", "Vanilla, Strawberry, Coffee");
let array = iceCream.split(",")
console.table(array);

let menu = {
  // key : value
  availableFlavors: ["Vanilla, Strawberry, Coffee, Chocolate, Coconut, Cherry"],
  sizes: ["Small, Medium, Large"],
  prices: ["Small = $3, Medium = $5, Large = $7"],
  onSale: false
};
console.table(menu);

console.log("--------------------------------------------------------------------------------------------------------------");
console.log("We have a new flavor!!!");
menu.availableFlavors.splice(4, 0, "Banana");
console.table(menu);