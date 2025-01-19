const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://Mubin_Director:!mPqLmtT24.ECZb@procom25.omcmh.mongodb.net/procom-25?retryWrites=true&w=majority&appName=procom25&tls=true";
let dbConnection

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

