"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
makeShirt();
makeShirt("Medium", "Hello, World!");
makeShirt("Small", "Coding is fun!");
