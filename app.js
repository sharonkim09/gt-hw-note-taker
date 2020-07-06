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
// View Routes -> HTML
// GET ROUTE
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

// API Routes -> JSON
app.get("/api/db",(req,res)=>{
    fs.readFile("./db/db.json","utf8",(err,data)=>{
        if(err){
            return res.send("Error occurred")
        }
        else{
            const arrayOfNotes= JSON.parse(data);
            res.json(arrayOfNotes);
        }
    })
})
// POST ROUTE
// DELETE ROUTE


// listener
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})