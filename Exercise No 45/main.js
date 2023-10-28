"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let carDetails = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
function createCar(manufacturer, modelName, ...additionalInfo) {
    let carInfo = {
        manufacturer,
        modelName,
    };
    additionalInfo.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}
console.log(carDetails);
