import inquirer from "inquirer";
let userAsk = await inquirer.prompt({
    type: "list",
    name: "alien_color",
    message: "An alien was just shot down in a game.",
    choices: ["Green", "Yellow", "Red"],
});
if (userAsk.alien_color === "Green") {
    console.log("Congratulations! You earned 5 points for shooting down the green alien.");
}
else {
    console.log("The player earned 10 points.");
}
