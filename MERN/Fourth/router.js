
const express = require('express')
const productRouter = express.Router()

const products = [
    {
        id:1,
        name:"AC",
        desc:"Cool AC",
        price:99999,
        category:"Elec",
        imgUrl:"https://imgs.search.brave.com/0_qc9hibZJfaPF1Bv1gZ7yEbpp2Viv6dMrFuZOCLAhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDM1NjcyL3Bob3Rv/L2Fpci1jb25kaXRp/b25pbmctc3lzdGVt/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0xWGNMWFhhb2st/SzZYNXRPajFTczRE/WDdtWklfUWtkbWpR/aEgzMU1FQ1M4PQ"
    },
    {
        id:2,
        name:"Ganne Ka Juice",
        desc:"Bada Gilas",
        price:20,
        category:"Drink",
        imgUrl:"https://imgs.search.brave.com/6E8R15f3MeQBC9ezlrRlO_f5wogP3pI5mWHobzOW3UE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYzL1N1Z2FyY2Fu/ZWp1aWNlLmpwZw"
    }
]

productRouter.get('/', (req, res) => {
    console.log("inside route")
    res.status(200).json({products})
})

productRouter.get("/:id", (req, res) => {
    const productId = parseInt(req.params.id)
    let product = products.find((p) => p.id === productId)

    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json({product})
})

productRouter.post("/", (req, res) => {
    let body = req.body
    products.push(body)
    res.status(201).json({message: "Product added", product: body})
})

module.exports = productRouter