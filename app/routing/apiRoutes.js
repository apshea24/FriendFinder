const express = require("express");

const path = require("path");

VARPORT = process.env.PORT || 8002;

let app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/data/friends.js"))
});

app.post("/api/friends", function(req, res) {
    let newFriend = req.body;

    
})