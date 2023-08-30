const express = require ("express")
//const index = require('./index.html')


const server = express()

const PORT = 2000

//server.use("/index.html")

server.set("view engine", "ejs")
server.set("views", "views")

server.get("/", (req, res) =>{
    res.status(200).render("index")

})

server.get("/index", (req, res) =>{
    res.status(200).render("index")

})


server.get("*", (req, res) =>{
    res.status(400).render("404")

})

server.listen(PORT, (req, res) =>{
    console.log(`The server has started runing at http://localhost:${PORT}`)
})