var friends = require("../data/friends")



module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    
        app.post('/api/friends', function(req, res) {
            // Capture the user input object
            var userInput = req.body;
            // console.log('userInput = ' + JSON.stringify(userInput));
    
            var userResponses = parseInt(userInput.scores);
            // console.log('userResponses = ' + userResponses);
    
            // Compute best friend match
            var matchName = '';
            var matchImage = '';
            var totalDifference = 10000; // Make the initial value big for comparison
    
            // Examine all existing friends in the list
            for (var i = 0; i < friends.length; i++) {
                // console.log('friend = ' + JSON.stringify(friends[i]));
    
                // Compute differenes for each question
                var diff = 0;
                for (var j = 0; j < userResponses.length; j++) {
                    diff += Math.abs(friends[i].scores[j] - parseInt(userResponses[j]));
                }
                // console.log('diff = ' + diff);
    
                // If lowest difference, record the friend match
                if (diff < totalDifference) {
                    // console.log('Closest match found = ' + diff);
                    // console.log('Friend name = ' + friends[i].name);
                    // console.log('Friend image = ' + friends[i].photo);
    
                    totalDifference = diff;
                    matchName = friends[i].name;
                    matchImage = friends[i].photo;
                }
            }
    
            // Add new user
            friends.push(userInput);
            console.log(userInput)
    
            // Send appropriate response
            res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
        });
    

}