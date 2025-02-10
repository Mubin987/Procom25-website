const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require("express");
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require("mongodb");
const { uploadToS3aws } = require('./s3bucket');
const {sendEmail} = require('./emailService');
const {sendEmailVerified} = require('./emailServiceVerified');
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
    const { id } = req.params; //Destructure id from the request params
    
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const objectId = new ObjectId(id);
        db.collection('competitions').findOne({ _id: objectId }, { projection: { registeredTeams: 0 } })
            .then((competition) => {
                if (!competition) {
                    return res.status(404).json({ error: "Competition not found" });
                }
                return res.status(200).json(competition);
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
        competitions.push(competition)
    })
    .then(()=>{
        res.status(200).json(competitions)
    })
    .catch(()=>{
        res.status(500).json({error: "could no fetch the competition"})
    })

})

app.get(`/${process.env.API}`, (req, res)=>{
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

app.get("/single_module/:id", (req, res)=>{

    if(req.query.p === process.env.DB_PWD){
    db.collection('competitions').findOne({_id: new ObjectId(req.params.id)})
    .then((record)=>{
        res.status(200).json(record)
    })
    .catch(()=>{
        res.status(500).json({error: "could no fetch the competition"})
    })
    }
    else{
        res.status(511).json({error: "Access to the DB is restricted"})        
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

      const leaderEmail = parsedTeam.member.find(member => member.isLeader).email;
      const teamName = parsedTeam.team_name;
    
      db.collection('competitions').updateOne(
        { _id: new ObjectId(_id) },
        { $push: { registeredTeams: parsedTeam }}
    )
    .then(async () => {
        try {
            await sendEmail( leaderEmail, teamName);
            console.log('Email sent successfully to '+ leaderEmail + ' from team ' + teamName);
          } catch (error) {
            console.error('Error in email function:', error);
          }
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
        res.status(500).json({ error: "Could not update the rulebook", details: err.message });
    });
    
});


// ______________________________________Delete APIs______________________________________


app.delete("/competitions/:id/teams", (req, res) => {
    // let deletedRecord = null
    db.collection('competitions').findOne({_id: new ObjectId(req.params.id)}, {projection:{_id:1, title:1, registeredTeams:1}})
    .then((c) => 
{    const deletedRecord = c

    if(deletedRecord){
    db.collection('Trash').insertOne(deletedRecord)
    .then(()=>{
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
    })}
    else{res.status(500).json({ error: "Failed to delete the teams" })}
}
)
});


app.get("/trash", (req, res) => {
    
    db.collection('Trash').find({})
    .toArray()
    .then((trash) => {
        res.status(200).json(trash);
    })
    .catch(() => {
        res.status(500).json({ error: "Could not get the Trashed Items" });
    });
})


app.delete("/trash", (req, res) => {
    
    db.collection('Trash').deleteMany({})
    .then((trash) => {
        res.status(200).json(trash);
    })
    .catch(() => {
        res.status(500).json({ error: "Could not clear the trash" });
    });
})


// ______________________________________SPONSORS API______________________________________
app.get("/sponsors", (req, res) => {

    db.collection('Sponsors').find()
    .toArray()
    .then((s) => {
        res.status(201).json(s);
    })
    .catch(() => {
        res.status(500).json({ error: "Could not get the sponsors" });
    });
});


app.get("/sponsors-optimized", (req, res) => {

    db.collection('Sponsors').find({show:true})
    .toArray()
    .then((s) => {
        res.status(201).json(s);
    })
    .catch(() => {
        res.status(500).json({ error: "Could not get the sponsors"  });
    });
});



// ______________________________________SPEAKERS API______________________________________

app.get("/speakers", (req, res) => {

    db.collection('Speakers').find()
    .toArray()
    .then((s) => {
        res.status(201).json(s);
    })
    .catch(() => {
        res.status(500).json({ error: "Could not get the sponsors"  });
    });
});



// ______________________________________Single Sponser API______________________________________

app.get("/Sponsor_logos", (req, res) => {
    let sponsors = []
    db.collection('Single_Sponsor').find()
    .forEach((s) => sponsors.push(s))
    .then(()=>{
        res.status(200).json(sponsors)
    } )
    .catch(() => {
        res.status(500).json({ error: "Could not get the sponsors" });
    });
});


// ______________________________________Payment verification portal API______________________________________

app.patch("/verification/:competitionId/team/:teamName", async (req, res) => {
    try {
        const { competitionId, teamName } = req.params;
        const approvedById = new ObjectId("67a1d1182d3e4d4285cea620");
        const competition = await db.collection('competitions').findOne({ _id: new ObjectId(competitionId) });

        if (!competition) {
            return res.status(404).json({ error: "Competition not found" });
        }

        const team = competition.registeredTeams.find(team => team.team_name === teamName);
        const leaderEmail = team.member.find(member => member.isLeader).email;

        if (!team) {
            return res.status(404).json({ error: "Team not found" });
        }

        // Update the isApproved field of the matched team
        const result = await db.collection('competitions').updateOne(
            { _id: new ObjectId(competitionId), "registeredTeams.team_name": teamName },
            { $set: { "registeredTeams.$.isApproved": "approved",
                "registeredTeams.$.collectedBy": "online",
                "registeredTeams.$.approvedBy": approvedById
             } },
            
        );

        if (result.modifiedCount > 0) {
            try {
                await sendEmailVerified( leaderEmail, teamName);
                console.log('Verification email sent successfully to '+ leaderEmail + ' from team ' + teamName);
              } catch (error) {
                console.error('Error in verification email function:', error);
              }
            return res.status(200).json({ message: `Team '${teamName}' verified successfully.` });
        } else {
            return res.status(400).json({ error: "Failed to verify team. No changes made." });
        }
    } catch (error) {
        console.error("Error verifying team:", error);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
});



