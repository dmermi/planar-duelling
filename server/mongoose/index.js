// Create DB connection here
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://planar_duelling:qC783qRF5kwhRnxAux@ds017776.mlab.com:17776/test-database");
