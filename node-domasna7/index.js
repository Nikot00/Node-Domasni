const express = require("express")

const app = express()

//1 
const data = {
    cars: ["BMW", "Porsche", "Audi", "Toyota"],
    cities: ["London", "Madrid", "Lisabon", "Amsterdam"],
    books: ["The Great Gatsby", "The hobbit", "Dune", "Project Hail Mary"]
}

app.get("/cars", (req, res) => {
    res.send(data.cars)
})

app.get("/cities", (req, res) => {
    res.send(data.cities)
})

app.get("/books", (req, res) => {
    res.send(data.books)
})


//2

app.get("/car", (req, res) => {
    const {query} = req.query
    const car = data.cars.find(c => c === query) 

    if(!car) {
        res.send("Car not found")
    }

    res.send(car)
})

app.get("/book", (req, res) => {
    const {query} = req.query
    const book = data.books.find(b => b === query) 

    if(!book) {
        res.send("Book not found")
    }

    res.send(book)
})

app.get("/cities", (req, res) => {
    const {query} = req.query
    const cities = data.cities.find(c => c === query) 

    if(!cities) {
        res.send("City not found")
    }

    res.send(cities)
})


//3

app.get("/users", async (req, res) => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    res.send(users.map(user => user.name))


} catch (err) {
    console.log(err);
}

})




app.listen(3000, () => {
  console.log("Server running on port 3000");
});