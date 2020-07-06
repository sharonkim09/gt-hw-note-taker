// express
const express = require("express")
// path package
const path = require("path")
// file package to sendFile
const fs = require("fs")
// instance of express
const app = express()
// const
// port
const PORT = process.env.PORT || 3000

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// functionalities
// GET ROUTE
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})
// POST ROUTE
// DELETE ROUTE


// listener
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})