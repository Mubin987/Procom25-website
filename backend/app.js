const express = require("express");
const {connectToDb, getDb} = require('./db')

//init app & middleware
const app = express()

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



