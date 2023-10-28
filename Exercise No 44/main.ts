function makeSandwich(...things: string[]) {
  console.log("Creating your sandwich with the following things:");
  for (let i = 0; i < things.length; i++) {
    console.log(`*${things[i]}`);
  }
  console.log("Enjoy your sandwich\n");
}

makeSandwich("Tomato", "Cheese");
makeSandwich("Swiss Cheese", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
