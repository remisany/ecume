import gql from "graphql-tag";

const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    notes: [Note]
  }

  input CreateUser {
    email: String!
    password: String!
  }

  input UpdateUser {
    id: ID!
    email: String
    password: String
  }
  
  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUser!): User!
    updateUser(input: UpdateUser!): User!
    deleteUser(id: ID!): User
  }
`;

export default userTypeDefs;
