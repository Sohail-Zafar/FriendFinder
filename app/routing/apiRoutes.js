//  Assignment: Friend Finder 
//  Programmer: Sohail Zafar 
//  File: apiRoutes.js
//  This application asks users questions and matches users with other users who answered the survey similarly.
//  This file is incomplete. Will complete it soon.

var friendData = require("./data/friends");

module.exports = function(app){


app.post('api/friends', function(req,res){
    if (friendData) {
       friendData.push(req.body);
       res.json(true);
      }
    req.body.json();
});
};