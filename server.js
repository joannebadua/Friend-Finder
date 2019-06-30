//require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var path = require ("path");
var bodyParser = require ("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

