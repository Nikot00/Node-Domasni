const {
    getAllCars,
    getSingleCar,
    addNewCar,
    deleteCar,
    editCar,
} = require("./script.js");

(async () => {
   
//await addNewCar({brand: "BMW", model: "F-10", year: 2014, id: 1 })
await addNewCar({brand: "Mercedes", model: "C63 AMG", year: 2022, id: 2 })

console.log(await getAllCars());

console.log(await getSingleCar(1));

//await addNewCar({brand: "Porsche", model: "911 Targa", year: 2024, id: 3 })

await deleteCar(2)

console.log(await getAllCars());

await editCar(1, {model: "E46", year: 2002}) 
 
console.log(getAllCars());


})()