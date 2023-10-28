import inquirer from "inquirer";
let favourite_fruits = ["Mangoes", "Grapes", "Pineapple"];
let usrRes = await inquirer.prompt({
    type: "list",
    name: "response",
    message: "Select fruit to check array",
    choices: ["Mangoes", "Apple", "Grapes", "Bananas", "Pineapple"],
});
if (favourite_fruits.includes(usrRes.response)) {
    console.log(`You really like ${usrRes.response}!`);
}
else {
    console.log(`You don't have ${usrRes.response} in favourit_fruits array`);
}
