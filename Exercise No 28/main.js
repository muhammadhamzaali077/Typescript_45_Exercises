import inquirer from "inquirer";
let age = await inquirer.prompt({
    name: "age",
    type: "input",
    message: "Enter Your Age",
});
if (age.age < 2) {
    console.log(`Your age is ${age.age}, You're a baby`);
}
else if (age.age >= 2 && age.age < 4) {
    console.log(`Your age is ${age.age}, You're a toddler`);
}
else if (age.age >= 4 && age.age < 13) {
    console.log(`Your age is ${age.age}, You're a kid`);
}
else if (age.age >= 13 && age.age < 20) {
    console.log(`Your age is ${age.age}, You're a teenager`);
}
else if (age.age >= 20 && age.age < 65) {
    console.log(`Your age is ${age.age}, You're an adullt`);
}
else if (age.age >= 65) {
    console.log(`Your age is ${age.age}, You're an elder`);
}
