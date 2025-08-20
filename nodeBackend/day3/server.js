const express = require("express");
const { connectToDB } = require("./mongodb.config");
const app = express();

connectToDB();

app.use(express.json());

app.listen(5050, () => {
    console.log('Server running at http://localhost:5000/');
});