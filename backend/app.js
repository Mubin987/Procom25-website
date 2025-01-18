const express = require("express");
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require("mongodb");

//init app & middleware
const app = express()
app.use(express.json())
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

app.get("/competitions", (req, res)=>{
    let competitions = []

    db.collection('competition').find()
    .forEach((competition)=> competitions.push(competition))
    .then(()=>{
        res.status(200).json(competitions)
    })
    .catch(()=>{
        res.status(500).json({error: "could no fetch the competition"})
    })

})


app.post("/register", (req, res)=>{
    const {_id, team} = req.body()
    db.collection('competition').findOne({"_id": ObjectId(_id)})
    .registeredTeams.insertOne(team)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch(()=>{
        res.status(500).json({error: "could no post the data"})
    })

})



