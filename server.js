//require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var path = require ("path");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//serve up the home and survey html pages

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})