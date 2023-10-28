"use strict";
let person_name = "muhammad hamza ali";
let lowerCase = person_name.toLowerCase();
console.log(lowerCase);
let upperCase = person_name.toUpperCase();
console.log(upperCase);
let titleCase = person_name.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log(titleCase);
