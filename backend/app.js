const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require("express");
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require("mongodb");

//init app & middleware
const app = express()
var cors = require('cors');
const multer = require('multer');
const upload = multer();


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
    .forEach((competition) => {
        delete competition.registeredTeams
        competitions.push(competition)
    })
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

app.post("/register", upload.single('file'), (req, res) => {
    const { _id, team } = req.body;
    const file = req.file; // The file object will be available in req.file

    console.log("File uploaded:", file); // Log file details
    console.log("Team Data:", team); // Log team data

    const parsedTeam = JSON.parse(team);

    parsedTeam.file = {
        fieldname: file.filename,
        originalname: file.originalname,
        encoding: file.encoding,
        mimetype: file.encoding,
        buffer: file.buffer,
        size: file.size,
    };

    console.log(parsedTeam)
    // Process the data and store it in the database
    db.collection('competitions').updateOne(
        { _id: new ObjectId(_id) },
        { $push: { registeredTeams: parsedTeam } }
    )
    .then(() => {
        res.status(201).json({ message: 'Team registered successfully', file: file });
    })
    .catch(() => {
        res.status(500).json({ error: "Could not register the team" });
    });
});


app.get("/competition/:competitionId/team/:teamName/image", async (req, res) => {
    const { competitionId, teamName } = req.params;

    try {
        // Fetch the competition document by ID
        const competition = await db.collection('competitions').findOne({ _id: new ObjectId(competitionId) });

        if (!competition) {
            return res.status(404).json({ error: "Competition not found" });
        }

        // Find the team by its team_name within the registeredTeams array
        const team = competition.registeredTeams.find(team => team.team_name === teamName);

        if (!team || !team.file || !team.file.buffer) {
            return res.status(404).json({ error: "File not found for the team" });
        }

        // Convert the base64 buffer to an image
        const base64Data = team.file.buffer.toString('base64');

        // Set the correct content type (image/png in this case)
        res.setHeader('Content-Type', 'image/png');

        // Send the image data
        res.send(Buffer.from(base64Data, 'base64'));
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ error: "Error fetching image" });
    }
});




