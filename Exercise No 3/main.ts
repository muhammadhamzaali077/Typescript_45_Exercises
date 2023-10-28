let person_name: string = "muhammad hamza ali";
let lowerCase: string = person_name.toLowerCase();
console.log(lowerCase);
let upperCase: string = person_name.toUpperCase();
console.log(upperCase);
let titleCase: string = person_name.replace(/\w\S*/g, function (txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log(titleCase);