const jackpots = require('./data/jackpots');
const games = require('./data/games');
module.exports = {
    Query: {
        hello: () => 'Hello world!',
        jackpots: () => jackpots,
        games: () => games
    },
};
