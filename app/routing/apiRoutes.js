//  Assignment: Friend Finder 
//  Programmer: Sohail Zafar 
//  File: apiRoutes.js
//  This application asks users questions and matches users with other users who answered the survey similarly.
//  

var friendData = require("../data/friends");
// Global variables
var newFriendInput;
var bestMatchName = "";
var bestMatchImage = "";
var differenceInAllScores = 9999;

module.exports = function(app) {

//  Post route. Receives data form client and compares with data stored on an array. Then returns the best match name 
//  and photo. Last the function adds new users data to the the friendData[]. 
app.post("/app/routing/apiRoutes", function(req,res){
    if (req) {
      newFriendInput = req.body;
      
      compareScores();

       friendData.push(req.body);
       res.json({friendNameMatch: bestMatchName, friendImageMatch: bestMatchImage});
      }

});
};

// This function compare score of new user to the scores of users score stored on the friendData array.
//  The friend with the least amount of difference in score becomes the best Match. 

function compareScores() {
  var newFriendScore = newFriendInput.scores;
   
  for ( var i = 0 ; i < friendData.length ; i++) {
    var differenceInScore = 0;

    for ( var j = 0 ; j < newFriendScore.length; j++){
      
      differenceInScore += Math.abs(friendData[i].scores[j] - newFriendScore[j]);
      
      if ( differenceInScore < differenceInAllScores){
        console.log(friendData[i].name);

        differenceInAllScores = differenceInScore;
        bestMatchName = friendData[i].name;
        bestMatchImage = friendData[i].image;
      }
    }
  }
}