import express from "express"
import path from "path"

const app = express()

app.use(express.urlencoded({extended: true}))

app.use((req, res) => {
    console.log(req.url, req.method);
})

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.post("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"))
})

app.post("/register", (req, res) => {
    console.log(req.body);
})

app.listen()