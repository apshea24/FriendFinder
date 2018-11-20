const express = require("express");

const path = require("path");


let friendsArr = require("./app/data/friends.js")



let PORT = process.env.PORT || 8000;

let app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT)
});

// console.log(friendsArr);




