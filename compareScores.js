

var friends = require("./data/friends");
 module.exports = function () {

 
var arrayOfObjs = []
// Chosen CSS
function createDiffArrs(user){
    var userScores = user.scores;
    const diffArr = []
    for (var i = 0; i < friends.length; i++){
        var currentArr = friends[i].scores;
        for (var j = 0; j < currentArr.length; j++){
            var difference = Math.abs(userScores[i] - currentArr[i])
            diffArr.push(difference);
                
        }
        var newScore = new ScoresObj(newArr, i);
        arrayOfObjs.push(newScore);
        console.log(arrayOfObjs);
        
    }
    var compatibility = Math.abs(arrayOfObjs.reduce());
    console.log("Compatability: " + compatibility )
}

    
function ScoresObj(scores, id){
    this.scores = scores;
    this.id = id;
}
    
 }
    
    
