// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    app.get("/data/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/data/friends", function (req, res) {
        console.log(req.body)
        var newFriendTotal = 0;
        for (let index = 0; index < req.body.answers.length; index++) {
            newFriendTotal += parseInt(req.body.answers[index]);
        //subtract from old friend's total in the array 
        }
        console.log("hi", newFriendTotal);
        var smallDifference = 10000;
        var bestFriend = {};
        for (let j = 0; j < friendsData.length; j++) {
                // console.log("old friends", friendsData[j]);
                //only want to add oldfriend here
                var oldFriendTotal = 0;
                for (let k = 0; k < friendsData[j].answers.length; k++) {
                    oldFriendTotal += parseInt(friendsData[j].answers[k]);
                }    
                console.log("tally old friens", oldFriendTotal);
                console.log("friends difference", Math.abs(newFriendTotal - oldFriendTotal));
                if (smallDifference > Math.abs(newFriendTotal - oldFriendTotal)) {
                     smallDifference = Math.abs(newFriendTotal - oldFriendTotal) 
                     bestFriend = friendsData[j];   
                }
        };
        console.log("your best friend", bestFriend);

        //pushed in the array
        friendsData.push(req.body);
        res.json(bestFriend);
    });

};