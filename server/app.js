const db = require("./mongoose");
const express = require('express');
const bodyParser= require('body-parser')

const app = express();

const models = require("./models");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3120, () => {
    console.log("Server is running on http://localhost:3120/");
});

require("./routes")(app);