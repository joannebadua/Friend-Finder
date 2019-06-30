//require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var mysql = require ("mysql");

var app = express();

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 8000,
    user: "root",
    password: "password",
    database: "seinfield"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connectiong: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
var html = "<p>Chec"

})