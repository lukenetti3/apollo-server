const { ApolloServer, gql } = require("apollo-server");
const models = require("./models");

const typeDefs = gql`
  type Link {
    id: Int!
    name: String!
    url: String!
  }

  type Query {
    getLink(id: Int!): Link!
    getLinks: [Link!]!
  }

  type Mutation {
    createLink(name: String!, url: String!): Link!
  }
`;

const resolvers = {
  Query: {
    async getLinks(root, args, { models }) {
      return models.Link.findAll();
    },
    async getLink(root, { id }, { models }) {
      return models.Link.findByPk(id);
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
