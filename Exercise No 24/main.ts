let fname = "hamza";
console.log("Is fname === 'hamza'? I predicted true"); // Equality test with strings
console.log(fname === "hamza");

console.log("Is fname === 'Hamza'? I predicted false"); // Inequality test with strings
console.log(fname === "Hamza");

let shoes = "Addidas";

console.log("Is shoes === 'Addidas'? I predicted true");
console.log(shoes.toLowerCase() === "addidas");

let num = 12;

console.log("Is num === 12? Ipredicted true"); // Equality test with number
console.log(num === 12);

console.log("Is num != 12? I predicted false"); // Inequality test with number
console.log(num != 12);

console.log("Is num > 10? I predicted true");
console.log(num > 10);

console.log("Is num < 19? I predicted true");
console.log(num < 19);

console.log("Is num >= 5? I predicted true");
console.log(num >= 5);

console.log("Is num <= 37? I predicted true");
console.log(num <= 37);

let presentPerson1 = true;
let presentPerson2 = true;

console.log(
  "Is the person both a presentPerson1 and presentPerson2? I predicted true"
);
console.log(presentPerson1 && presentPerson2);

let isPerson1 = false;
let isPerson2 = true;

console.log("Is the person either isPerson1 or isPerson2? I predicted true");
console.log(isPerson1 || isPerson2);

let geometryBox = ["Pencil", "Scale", "Rubber", "Sharpner"];
let checkItem = "Rubber";

console.log(`Is ${checkItem} is in the geometryBox array? I predicted true`);
console.log(geometryBox.includes(checkItem));

let addItem = "Pens";

console.log(`Is ${addItem} isn't in the geometryBox array? I predicted true`);
console.log(!geometryBox.includes(addItem));
