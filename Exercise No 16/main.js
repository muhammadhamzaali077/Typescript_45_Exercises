"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dinnerInvite = ["Hamza", "Ali", "Humaiyon"];
for (let i = 0; i < dinnerInvite.length; i++) {
    console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.`);
}
const personUnavailable = "Ali";
console.log(`Unfortunately, ${personUnavailable} can't make it.`);
const newPerson = "Arham";
dinnerInvite[dinnerInvite.indexOf(personUnavailable)] = newPerson;
for (let i = 0; i < dinnerInvite.length; i++) {
    console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.`);
}
console.log("I found big place for dinner so i'm inviting more people");
dinnerInvite.unshift("Rustam");
dinnerInvite.splice(Math.floor(dinnerInvite.length / 2), 0, "Qasim");
dinnerInvite.push("Aslam");
for (let i = 0; i < dinnerInvite.length; i++) {
    console.log(`Dear ${dinnerInvite[i]}, you are invited to dinner.`);
}
