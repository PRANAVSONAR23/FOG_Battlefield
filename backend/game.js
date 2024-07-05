const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(express.json());
app.use(cors()); 


const port = process.env.PORT || 3000;

// Defining schemas
const schema1 = new mongoose.Schema({
    PLAYERS: String,
    PING: String,
    TICKRATE: String
});

const schema2 = new mongoose.Schema({
    REGION: String,
    PUNKBASTER: String,
    FAIRFIGHT: String,
    PASSWORD: String,
    PRESET: String
});

const schema3 = new mongoose.Schema({
    MINIMAP: String,
    "ONLY SQUAD LEADER SPAWN": String,
    VECHILE: String,
    "TEAM BALANCE": String,
    "MINIMAP SPOTTING": String,
    HUD: String,
    "3P VECHILE CAM": String,
    "REGENERATIVE HEALTH": String,
    "KILL CAM": String,
    "FRIENDLY FIRE": String,
    "3D SPOTTING": String,
    "ENEMY NAME TAGS": String
});

const schema4 = new mongoose.Schema({
    TICKETS: String,
    "VECHILE SPAWN": String,
    "BULLET DAMAGE": String,
    "KICK AFTER TEAM KILLS": String,
    "PLAYER HEALTH": String,
    "PLAYER RESPAWN TIME": String,
    "KICK AFTER IDLE": String,
    "BAN AFTER KICKS": String
});

// Creating models
const first = mongoose.model('first', schema1);
const second = mongoose.model('second', schema2);
const third = mongoose.model('third', schema3);
const fourth = mongoose.model('fourth', schema4);

// Adding data to the database (if necessary)

// Creating HTTP server
app.get("/first", async function(req, res) {
    try {
        const response = await first.find({});
        if (response) {
            data = response[0];
            res.json(data);
        } else {
            res.status(404).json({ msg: "some error has occurred in fetching the info" });
        }
    } catch (error) {
        res.send(error);
    }
});

app.get("/second", async function(req, res) {
    try {
        const response = await second.find({});
        if (response) {
            data = response[0];
            res.json(data);
        } else {
            res.status(404).json({ msg: "some error has occurred in fetching the info" });
        }
    } catch (error) {
        res.send(error);
    }
});

app.get("/third", async function(req, res) {
    try {
        const response = await third.find({});
        if (response) {
            data = response[0];
            res.json(data);
        } else {
            res.status(404).json({ msg: "some error has occurred in fetching the info" });
        }
    } catch (error) {
        res.send(error);
    }
});

app.get("/fourth", async function(req, res) {
    try {
        const response = await fourth.find({});
        data = response[0];
        if (response) {
            data = response[0];
            res.json(data);
        } else {
            res.status(404).json({ msg: "some error has occurred in fetching the info" });
        }
    } catch (error) {
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
