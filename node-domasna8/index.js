const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}))

const { getAnalysis, postAnalysis } = require("./controllers/analiza")


app.get("/analiza", getAnalysis)

app.post("/analiza", postAnalysis)


app.listen(3000, () => {
    console.log("Server started")
})