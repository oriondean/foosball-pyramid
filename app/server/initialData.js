exports.players = [
    { _id: 0, firstName: "Dean", lastName: "Kerr", position: 2 },
    { _id: 1, firstName: "Alan", lastName: "Shearer", position: 3 },
    { _id: 2, firstName: "Eddie", lastName: "Murphy", position: 4 },
    { _id: 3, firstName: "Stevie", lastName : "Wonder", position: 1 }
];

exports.challenges = [
    { challenger: 0, challenged: 1, accepted: false, completed: false, result: null },
    { challenger: 2, challenged: 3, accepted: true, completed: false, result: null }
];

exports.results = [
    { _id: 0, winner: 3, loser: 0, winnerScore: 10, loserScore: 8, time: 1442702141567 },
    { _id: 1, winner: 0, loser: 1, winnerScore: 10, loserScore: 4, time: 1442586900000 },
    { _id: 2, winner: 1, loser: 2, winnerScore: 10, loserScore: 6, time: 1442583300000 }
];

exports.playerStats = [
    { player: 0, played: 2, won: 1, lost: 1, scored: 18, conceded: 14},
    { player: 1, played: 2, won: 1, lost: 1, scored: 14, conceded: 16},
    { player: 2, played: 1, won: 0, lost: 1, scored: 6, conceded: 10},
    { player: 3, played: 1, won: 1, lost: 0, scored: 10, conceded: 8}
];