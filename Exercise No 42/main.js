"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Hamza", "Ali", "Umar", "Raheem", "Sumair"];
function showMagicians(magicians) {
    console.log("Original List Of Magicians");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function updatedMagicians(magicians) {
    console.log("List After Adding 'The Great'");
    for (let i = 0; i < magicians.length; i++) {
        console.log(`The Great ${magicians[i]}`);
    }
}
showMagicians(magicians);
updatedMagicians(magicians);
