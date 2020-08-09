const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Jackpot {
        game: String
        amount: String
    }
    
    type Game {
        id: String, 
        categories: [String],
        name: String,
        image: String,
    }
    
    type Query {
        hello: String,
        jackpots: [Jackpot],
        games: [Game]
    }
`;

module.exports = typeDefs;
