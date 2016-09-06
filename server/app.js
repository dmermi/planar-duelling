const db = require("./mongoose");
const express = require('express');
const app = express();


app.listen(3120, () => {
    console.log("Server is running on http://localhost:3120/");
})