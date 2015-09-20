var MongoClient = require("Mongodb").MongoClient;
var initialData = require("./initialData.js");
var url = "mongodb://localhost:27017/foosball-pyramid";

MongoClient.connect(url, function(err, db) {
    if(!err && db) {
        console.log("Connected correctly to server.");

        var players = db.collection("players");
        players.drop();
        players.insertMany(initialData.players);

        var challenges = db.collection("challenges");
        challenges.drop();
        challenges.insertMany(initialData.challenges);

        var results = db.collection("results");
        results.drop();
        results.insertMany(initialData.results);

        var playerStats = db.collection("playerStats");
        playerStats.drop();
        playerStats.insertMany(initialData.playerStats);

        console.log("Initial data population complete");

        db.close();
    } else {
        console.log("Error connecting to server.");
    }
});