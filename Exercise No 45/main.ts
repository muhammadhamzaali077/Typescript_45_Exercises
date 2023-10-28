let carDetails = createCar(
  "Toyota",
  "Corolla",
  ["color", "red"],
  ["year", 2022]
);

function createCar(
  manufacturer: string,
  modelName: string,
  ...additionalInfo: [string, any][]
): Record<string, any> {
  let carInfo: Record<string, any> = {
    manufacturer,
    modelName,
  };

  additionalInfo.forEach(([key, value]) => {
    carInfo[key] = value;
  });

  return carInfo;
}

console.log(carDetails);
