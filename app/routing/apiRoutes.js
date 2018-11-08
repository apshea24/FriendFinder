const express = require("express");

const path = require("path");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let apiRoutes = function () {

    console.log("Routes Working")

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/data/friends.js"))
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        
        console.log(newFriend);


    });

};

module.export = apiRoutes();