import inquirer from "inquirer";

let userAsk = await inquirer.prompt({
  type: "list",
  name: "alien_color",
  message: "An alien was just shot down in a game.",
  choices: ["Green", "Yellow", "Red"],
});

if (userAsk.alien_color === "Green") {
  console.log(
    "Congratulations! You earned 5 points for shooting down the green alien."
  );
} else if (userAsk.alien_color === "Yellow") {
  console.log(
    "Congratulations! You earned 10 points for shooting down the green alien."
  );
} else if (userAsk.alien_color === "Red") {
  console.log(
    "Congratulations! You earned 15 points for shooting down the green alien."
  );
}
