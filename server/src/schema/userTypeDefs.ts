const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    notes: [Note!]!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): User!
  }
`;

export default userTypeDefs;
