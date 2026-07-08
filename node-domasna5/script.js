const {read, write} = require("./io.js")

const fs = require("fs")


const getAllCars = async () => {
    return await read("data.json");
};

const getSingleCar = async (id) => {
    const cars = await read("data.json");
    return cars.find((c) => c.id === id);
};

const addNewCar = async (car) => {
    const cars = await read("data.json");
    cars.push(car);
    await write("data.json", cars);
};

const deleteCar = async (id) => {
    let cars = await read("data.json");
    cars = cars.filter((c) => c.id !== id);
    await write("data.json", cars);
};

const editCar = async (id, newData) => {
    let cars = await read("data.json");

    cars = cars.map((c) => {
        if (c.id === id) {
            return { ...c, ...newData };
        }
        return c;
    });

    await write("data.json", cars);
};

module.exports = {
    getAllCars,
    getSingleCar,
    addNewCar,
    deleteCar,
    editCar,
};