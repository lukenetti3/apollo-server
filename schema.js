const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    getLink(id: Int!): Link!
    getLinks: [Link!]!
  }

  type Mutation {
    createLink(name: String!, url: String!): Link!
  }
`;

module.exports = typeDefs;
