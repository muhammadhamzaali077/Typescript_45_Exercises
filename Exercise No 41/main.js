"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Hamza", "Ali", "Umar", "Raheem", "Sumair"];
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Magician ${magicians[i]}`);
    }
}
showMagicians(magicians);
