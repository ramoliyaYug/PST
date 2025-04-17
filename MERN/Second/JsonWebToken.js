const jwt = require('jsonwebtoken');

function generateToken(){
    const payload = {userId:123}
    const secretKey = 'secretKey'
    const option = {expiresIn:'1h'}

    try{
        const token = jwt.sign(payload,secretKey,option)
        console.log(token)
    }catch (err){
        console.log(err)
    }
}

// generateToken()

function generateSellerToken(){
    const payload = {userId: 123,usename:"seller"}
    const secretKey = 'sellersecret'
    const option = {expiresIn:'1h'}
    const sellertoken = jwt.sign(payload,secretKey,option)
    console.log(sellertoken)
}
function generateBuyerToken(){
    const payload = {userId: 1234,usename:"Buyer"}
    const secretKey = 'buyersecret'
    const option = {expiresIn:'1h'}
    const buyertoken = jwt.sign(payload,secretKey,option)
    console.log(buyertoken)
}

generateSellerToken()
generateBuyerToken()