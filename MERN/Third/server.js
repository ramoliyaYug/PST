const http = require('http')
const { MongoClient, ObjectId } = require('mongodb')
const urlModule = require('url')

const mongourl = "mongodb+srv://mastermind57369:BWXKTgXwS5JQduag@cluster0.x7wnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(mongourl)

const dbName = 'yugdb'

const server = http.createServer((req, res) => {
    handleRequest(req, res).catch(err => {
        console.error('Error occurred:', err)
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Internal Server Error')
    })
})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})

// async function handleRequest(req, res) {
//     await client.connect()
//     const db = client.db(dbName)
//     const collection = db.collection('students')
//
//     const parsedUrl = urlModule.parse(req.url, true)
//     const { pathname, query } = parsedUrl
//     res.setHeader('Content-Type', 'application/json')
//
//     if (pathname === '/create' && req.method === 'GET') {
//         const result = await collection.insertOne({
//             name: query.name || 'Default Name',
//             email: query.email || 'Default Email',
//         })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify({ message: 'Route not found' }))
//     }
// }

// async function handleRequest(req, res){
//     await client.connect()
//     const db = client.db(dbName)
//     const collection = db.collection('students')
//
//     const parsedUrl = urlModule.parse(req.url, true)
//     const {pathname, query} = parsedUrl
//
//     res.setHeader('Content-Type', 'application/json')
//
//     if(pathname==='/read' && req.method === 'GET'){
//         const result = await collection.find({}).toArray()
//         res.end(JSON.stringify(result))
//     }
// }

// async function handleRequest(req, res) {
//     await client.connect()
//     const db = client.db(dbName)
//     const collection = db.collection('students')
//
//     const parsedUrl = urlModule.parse(req.url, true)
//     const { pathname, query } = parsedUrl
//
//     res.setHeader('Content-Type', 'application/json')
//
//     if(pathname === '/update' && req.method === 'GET'){
//         if(!query.id || (!query.name && !query.email)){
//             res.end(JSON.stringify({message: 'Missing required parameters'}))
//             return
//         }
//         const updateData = {}
//
//         if(query.name) updateData.name = query.name
//         if(query.email) updateData.email = query.email
//
//         const result = await collection.updateOne(
//             { _id: new ObjectId(query.id) },
//             { $set: updateData }
//         )
//         res.end(JSON.stringify(result))
//     }
// }

async function handleRequest(req, res) {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('students')

    const parsedUrl = urlModule.parse(req.url, true)
    const { pathname, query } = parsedUrl

    res.setHeader('Content-Type', 'application/json')

    if(pathname === '/delete' && req.method === 'GET'){
        if(!query.id){
            res.end(JSON.stringify({message: 'Missing required parameters'}))
            return
        }

        const result = await collection.deleteOne({ _id: new ObjectId(query.id) })
        res.end(JSON.stringify(result))
    }
}