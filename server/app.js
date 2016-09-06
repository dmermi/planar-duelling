const db = require("./mongoose");
const express = require('express');
const app = express();

const models = require("./models");

app.listen(3120, () => {
    console.log("Server is running on http://localhost:3120/");

/*
    var me = new models.Player({
        name: 'me1', 
        password: 'test', 
        email: 'test1'
    });
    
    me.save().then(
        () => console.log("Player me created")
    );
    */
});