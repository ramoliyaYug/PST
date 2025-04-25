const express = require('express')
const bodyParser = require("body-parser");

const app = express()

const productRouter = require("./router")

app.use(bodyParser.json())

app.use("/product", productRouter)

app.use((req, res) => {
    res.status(404).json({message:"Not found"})
})
app.listen(3000, () => console.log('Server listening on port 3000'))