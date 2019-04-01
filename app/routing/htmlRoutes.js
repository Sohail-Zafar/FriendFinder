//  Assignment: Friend Finder 
//  Programmer: Sohail Zafar 
//  File: htmlRoutes.js
//  This application asks users questions and matches users with other users who answered the survey similarly.
// This file is incomplete. Will complete it soon. 

var path = require("path");

module.exports = function(app){

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './app/public/home.html'));
});

app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, './app/public/survey.html'));
});


}