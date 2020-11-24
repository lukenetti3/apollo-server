const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type LongURL {
    id: Int!
    long_URL: String!
  }

  type ShortURL {
    id: Int!
    short_URL: String!
  }

  type Query {
    longURL: String
    shortURL: String
  }

  type Mutation {
    createShortURL(name: String!): LongURL!
  }
`;

const resolvers = {
  Query: {
    async longURL(root, { id }, { models }) {
      return models.LongURL.findByPk(id);
    },
    async shortURL(root, { id }, { models }) {
      return models.ShortURL.findByPk(id);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
