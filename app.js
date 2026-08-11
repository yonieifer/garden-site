import express from "express";
import path from "path";

const app = express();

// app.use(express.urlencoded({ extended: true }));

app.use(express.static(import.meta.dirname))

app.use((req, res, next) => {
    console.log(req.method, req.url);
    console.log(import.meta.dirname);
    
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "home.html"));
});

app.post("/contact", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "contact.html"));
});

app.post("/register", (req, res) => {
    console.log(req.body);
});

app.listen(process.env.PORT, () => console.log("server is up..."));
