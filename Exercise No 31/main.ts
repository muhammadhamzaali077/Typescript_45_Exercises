let users = ["Hamza", "Ali", "Humaiyon"];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < users.length; i++) {
    console.log(`Hello ${users[i]}!`);
  }
  users.length = 0;

  if (users.length === 0) {
    console.log("The list of users is empty!");
    console.log("We need to find some users!");
  }
}
