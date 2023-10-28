import inquirer from "inquirer";

let usrAcc = await inquirer.prompt({
  type: "list",
  name: "Account",
  message: "Select Your User Account",
  choices: ["Hamza", "Ali", "Humaiyon", "Admin", "Sadiq"],
});

if (usrAcc.Account === "Admin") {
  console.log(
    `Hello ${usrAcc.Account}, would you like to see a status report?`
  );
}else{
    console.log(` Hello ${usrAcc.Account}, thank you for logging in again.`);
    
}
