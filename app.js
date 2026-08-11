import express from "express";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(import.meta.dirname, "public")))

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public", "home.html"));
});

// app.get("/contact", (req, res) => {
//     res.sendFile(path.join(import.meta.dirname, "contact.html"));
// });

app.post("/register", (req, res) => {
    console.log(req.body);
});

app.listen(process.env.PORT, () => console.log("server is up..."));
