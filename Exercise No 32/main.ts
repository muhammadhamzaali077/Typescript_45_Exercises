let regUser: string[] = ["hamza", "ali", "humaiyon", "sadiq"];
let newUser: string[] = ["ali", "Rustam", "Hamza", "sami"];

for (let i = 0; i < newUser.length; i++) {
  let checkUser = newUser[i].toLowerCase(); // Convert the current user to lowercase for comparison
  if (regUser.includes(checkUser)) {
    console.log(`Sorry, ${checkUser} is not available`);
  } else {
    console.log(`${checkUser} is available`);
  }
}
