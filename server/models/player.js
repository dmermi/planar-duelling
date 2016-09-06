var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PlayerSchema = Schema({
    name: {type: String},
    password: {type: String},
    email: {type: String}
});

Player = mongoose.model("Player", PlayerSchema);

exports.Player = Player;