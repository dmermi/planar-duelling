// Create DB connection here
var mongoose = require("mongoose");
var settings = require("./settings");

mongoose.Promise = global.Promise;
mongoose.connect(settings);
