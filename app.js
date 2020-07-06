// express
const express = require("express")

// instance of express
const app = express()

// port
const PORT = process.env.PORT || 3000

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// functionalities
// GET ROUTE
// POST ROUTE
// DELETE ROUTE


// listener
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})