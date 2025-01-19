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



