//require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var path = require ("path");
var bodyParser = require ("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//serve up the home and survey html pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"))
})

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"))
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})