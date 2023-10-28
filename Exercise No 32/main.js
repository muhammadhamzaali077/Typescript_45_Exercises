"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let regUser = ["hamza", "ali", "humaiyon", "sadiq"];
let newUser = ["ali", "Rustam", "Hamza", "sami"];
for (let i = 0; i < newUser.length; i++) {
    let checkUser = newUser[i].toLowerCase(); // Convert the current user to lowercase for comparison
    if (regUser.includes(checkUser)) {
        console.log(`Sorry, ${checkUser} is not available`);
    }
    else {
        console.log(`${checkUser} is available`);
    }
}
