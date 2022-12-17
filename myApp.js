require('dotenv').config();

const e = require('express');
let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", (req, res) => { res.sendFile(__dirname + "/views/index.html") });

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            message: "Hello json".toUpperCase()
        });
    }
    else {
        res.json({
            message: "Hello json"
        });
    }
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();

}, (req, res) => {
    res.json({time: req.time
    });
});

app.get("/:word/echo", (req, res) =>{
    res.json({
        echo: req.params.word
    });
});




































module.exports = app;
