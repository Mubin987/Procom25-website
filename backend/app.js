const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require("express");
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require("mongodb");
const { uploadToS3aws } = require('./s3bucket');
require('dotenv').config();

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

app.get("/", (req, res)=>{
    
    res.status(200).json({connection: "Server is running"})

})


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

    db.collection('competitions').find({}, { projection: { registeredTeams: 0 } })
    .forEach((competition) => {
        // delete competition.registeredTeams
        competitions.push(competition)
    })
    .then(()=>{
        res.status(200).json(competitions)
    })
    .catch(()=>{
        res.status(500).json({error: "could no fetch the competition"})
    })

})

app.get("/competitions18022025", (req, res)=>{
    let competitions = []

    db.collection('competitions').find()
    .forEach((competition) => {
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

app.get("/competitionByName/:name", (req, res)=>{
    
    const name = req.params.name.split('-').join(' ')
        db.collection('competitions').findOne({title: name})
        .then((c)=>{
            res.status(200).json(c)
        })
        .catch(()=>{
            res.status(500).json({error: "could no fetch the competition"})
        })

})


app.get("/competition/:id/registeredCount", (req, res)=>{
    
    db.collection('competitions').aggregate([
        {
            $match: {
                _id: new ObjectId(req.params.id) // Match the competition by its ID
            }
        },
        {
            $project: {
                registeredTeamsCount: { $size: "$registeredTeams" } // Count the number of items in registeredTeams array
            }
        }
    ])
        .toArray()
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json( result[0].registeredTeamsCount ); // Send the count of registeredTeams
            } else {
                res.status(404).json({ error: "Competition not found" });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Could not fetch the competition" }); // Error handling
        });
})


app.post("/register", upload.single('file'), async (req, res) => {
    //const bucketName = process.env.BUCKET;
    const { _id, team } = req.body;
    const file = req.file;
    let parsedTeam = JSON.parse(team);

    try {
        const fileBuffer = Buffer.from(file.buffer, 'base64');
        const response = await uploadToS3aws(process.env.BUCKET, file.originalname, fileBuffer);
        console.log('File uploaded successfully:', response);
        parsedTeam.payment_URL = response.Location
      } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: "Could not register the team" });
      }
    
    parsedTeam.register_time = new Date()
    db.collection('competitions').updateOne(
        { _id: new ObjectId(_id) },
        { $push: { registeredTeams: parsedTeam }}
    )
    .then(() => {
        res.status(201).json({ message: 'Team registered successfully', file: file });
    })
    .catch(() => {
        res.status(500).json({ error: "Could not register the team" });
    });
});


app.post("/pre-register", (req, res) => {

    const {_id, team_name} = req.body.data

    db.collection('competitions').findOne({_id: new ObjectId(_id), "registeredTeams.team_name": team_name}, { projection: {_id: 1}})
    .then((c) => {
        if(!c){
            res.status(200).json({ message: 'Team name is available', isAvailable: true});
        }else{
            res.status(200).json({ message: 'Team name is not available', isAvailable: false});
        }
        
    })
    .catch(() => {
        res.status(500).json({ available: "Failed to fetch the team name from server" });
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





app.patch("/update_rulebook_url/:id", (req, res) => {
    const { id } = req.params;
    const url = req.body.url; // The file object will be available in req.file

    console.log("Rulebook uploaded:", url); // Log file details

    console.log("Using collection:", db.collection('competitions'));

    db.collection('competitions').updateOne(
        { _id: new ObjectId(id) },
        // { $push: { registeredTeams: parsedTeam } }
        { 
            $set: { 
                "rulebook.book_url": url // Update the book_url field
            } 
        }
    )
    .then(() => {
        res.status(201).json({ message: 'Rulebook uploaded successfully', url: url });
    })
    .catch((err) => {
        console.error("Error uploading rulebook:", err);
        res.status(500).json({ error: "Could not register the team", details: err.message });
    });
    
});




app.delete("/competitions/:id/teams", (req, res) => {

    db.collection('competitions').updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { registeredTeams: []} }
    )
    .then(() => {
        res.status(201).json({ message: 'Teams deleted successfully'});
    })
    .catch(() => {
        res.status(500).json({ error: "Could not delete the teams" });
    });
});