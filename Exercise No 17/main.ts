const dinnerInvite = ["Hamza", "Ali", "Humaiyon"];
for (let i = 0; i < dinnerInvite.length; i++) {
  console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.\n`);
}
const personUnavailable = "Ali";
console.log(`Unfortunately, ${personUnavailable} can't make it.\n`);
const newPerson = "Arham";
dinnerInvite[dinnerInvite.indexOf(personUnavailable)] = newPerson;

for (let i = 0; i < dinnerInvite.length; i++) {
  console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.\n`);
}

console.log("I found big place for dinner so i'm inviting more people\n");
dinnerInvite.unshift("Rustam");
dinnerInvite.splice(Math.floor(dinnerInvite.length / 2), 0, "Qasim");
dinnerInvite.push("Aslam");
for (let i = 0; i < dinnerInvite.length; i++) {
  console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.\n`);
}

const max_person = 2;

if (dinnerInvite.length > max_person) {
  console.log(
    "Unfortunately we have only 2 person's seat on the table sorry i'll arrange it again on another day\n"
  );

  while (dinnerInvite.length > max_person) {
    let remove_person = dinnerInvite.pop();
    console.log(`Sorry ${remove_person} we can't have dinner today.\n`);
  }
}

for (let i = 0; i < dinnerInvite.length; i++) {
  console.log(
    `Dear ${dinnerInvite[i]}! Today i'm organising a dinner party and you are still invited.\n`
  );
}
dinnerInvite.pop();
dinnerInvite.pop();
console.log("Final list", dinnerInvite);
