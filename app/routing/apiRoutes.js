// const express = require("express");
const path = require("path");

// let app = express();

let apiRoutes = function (app) {

    // console.log("Routes Working")

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"))
    });

    app.post("/api/friends", function (req, res) {
        let newScores = req.body.scores;
        let scoresArr = [];
        console.log(newScores);

        friendsArr.forEach(function(friends) {
            var scoresDiff = 0;

            newScores.forEach(function (scores, j) {
                scoresFDiff += (Math.abs(parseInt(friends.scores[j] - parseInt(scores))))
            });
            scoresArray.push(scoresDiff);
            console.log(scoresArray)
        });

        scoresArray.forEach(function(scores, i){
            if(scores <= scoresArr[bestMatch]) {
                bestMatch = i;
            };
            console.log(bestMatch)
        });
    
        //return bestMatch data
        var bestFriend = friendsArr[bestMatch];
        res.json(bestFriend);
    
        friendsArr.push(req.body);

    });

};

module.exports = apiRoutes;