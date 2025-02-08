const {MongoClient} = require('mongodb')
require('dotenv').config();

const uri = process.env.MONGODB_URI;
let dbConnection;

module.exports = {
    connectToDb: (cb)=> {
        MongoClient.connect(uri)
            .then((client)=> {
                dbConnection = client.db()
                cb()
            })
            .catch((err)=>{
                console.log(err)
                cb(err)
            })
    },
    getDb: ()=> dbConnection
}

