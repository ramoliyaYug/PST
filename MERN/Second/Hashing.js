const bycrpt = require('bcrypt');

async function hashPassword() {
    try{
        const password = 'yugisgreat'
        const saltRounds = 10
        const hashed = await bycrpt.hash(password,saltRounds)
        console.log(hashed)
    }catch(err){
        console.log(err)
    }
}

// hashPassword()

async function run(){
    try {
        const originalPassword = 'yugisgreat'
        const userInput = 'yugisbakra'
        const saltRounds = 10
        const hashed = await bycrpt.hash(originalPassword, saltRounds)
        const isValid = await bycrpt.compare(userInput, hashed)
        console.log(isValid)
    }catch(err){
        console.log(err)
    }
}

run()