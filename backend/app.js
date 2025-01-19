const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require("express");
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require("mongodb");

//init app & middleware
const app = express()
var cors = require('cors')


app.use(bodyParser.json())
app.use(cors()) // Use this after the variable declaration

let db
//db connection
connectToDb((err)=>{

    if(!err){
        app.listen(3000, ()=>{
            console.log("app is listening")
        })

        db = getDb()
    }
})





// routes
app.get("/competition/:id", (req, res) => {
    const { id } = req.params; // Destructure id from the request params
    
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        // Convert the id to ObjectId for MongoDB query
        const objectId = new ObjectId(id);

        // Query the MongoDB collection to find the competition by _id
        db.collection('competitions').findOne({ _id: objectId })
            .then((competition) => {
                if (!competition) {
                    return res.status(404).json({ error: "Competition not found" });
                }
                return res.status(200).json(competition); // Send the found competition as a response
            })
            .catch(() => {
                res.status(500).json({ error: "Could not fetch the competition" });
            });
    } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
    }
});



// get competitions from MongoDB
app.get("/competition", (req, res)=>{
    let competitions = []

    db.collection('competitions').find()
    .forEach((competition)=> competitions.push(competition))
    .then(()=>{
        res.status(200).json(competitions)
    })
    .catch(()=>{
        res.status(500).json({error: "could no fetch the competition"})
    })

})

app.get("/competition/:id", (req, res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        db.collection('competitions').findOne({_id: new ObjectId(req.params.id)})
        .then((c)=>{
            res.status(200).json({oneRecord: c})
        })
        .catch(()=>{
            res.status(500).json({error: "could no fetch the competition"})
        })


    }else{
        res.status(500).json({error: "id is not valid"})

}
})


// post team record in competition 

// Define Mongoose Schema and Model
// Define the member schema

app.post("/register",(req, res)=>{
    
    const {_id, team} = req.body;

    db.collection('competitions').updateOne(
        { _id: new ObjectId(_id) }, // Find the document by _id
        { $push: { registeredTeams: team } } // Push the team into the registeredTeams array
    )
    .then(()=>{
        res.status(201).json(req.body)
    })
    .catch(()=>{
        res.status(500).json({error: "could no register the team"})
    })
    
})



