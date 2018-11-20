// const express = require("express");
const path = require("path");

// let app = express();

let htmlRoutes = function (app) {

    // console.log("html working")

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
};

module.exports = htmlRoutes;