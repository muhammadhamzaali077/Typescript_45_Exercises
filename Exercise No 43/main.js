"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Hamza", "Ali", "Umar", "Raheem", "Sumair"];
function showMagicians(magicians) {
    console.log("Original List Of Magicians");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
showMagicians(magicians);
console.log("Array updated with 'The Great'");
for (let i = 0; i < magicians.length; i++) {
    let originalMagicians = ["The Great " + magicians[i]];
    console.log(originalMagicians);
}
