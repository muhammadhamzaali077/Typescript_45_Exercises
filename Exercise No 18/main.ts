const places = ["Karachi", "Islamabad", "Quetta", "Murree", "Lahore"];
console.log("Original order:");
console.log(places.join(", "));

console.log("\nAlphabetical order:");
console.log(places.slice().sort().join(", "));

console.log("\nOriginal order (again):");
console.log(places.join(", "));

console.log("\nReverse alphabetical order:");
console.log(places.slice().sort().reverse().join(", "));

console.log("\nOriginal order (again):");
console.log(places.join(", "));

console.log("\nReversed order:");
console.log(places.reverse().join(", "));

console.log("\nOriginal order (again):");
console.log(places.join(", "));

console.log("\nSorted in alphabetical order:");
console.log(places.slice().sort().join(", "));

console.log("\nSorted in reverse alphabetical order:");
console.log(places.slice().sort().reverse().join(", "));