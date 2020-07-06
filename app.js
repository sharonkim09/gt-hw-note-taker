// express
const express = require("express")

// instance of express
const app = express()

// port
const PORT = process.env.PORT || 3000

// listener
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})