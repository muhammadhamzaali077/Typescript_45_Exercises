"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dinnerInvite = ["Hamza", "Ali", "Humaiyon"];
for (let i = 0; i < dinnerInvite.length; i++) {
    console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.\n`);
}
const personUnavailable = "Ali";
console.log(`Unfortunately, ${personUnavailable} can't make it.\n`);
const newPerson = "Arham";
dinnerInvite[dinnerInvite.indexOf(personUnavailable)] = newPerson;
for (let i = 0; i < dinnerInvite.length; i++) {
    console.log(`Dear ${dinnerInvite[i]}, you are still invited to dinner.\n`);
}
console.log(`We are inviting ${dinnerInvite.length} people to dinner.\n`);
