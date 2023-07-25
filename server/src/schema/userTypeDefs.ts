import gql from "graphql-tag";

const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    hasChangePassword: Boolean!
    notes: [Note]
  }

  input CreateUser {
    email: String!
  }
  
  type Query {
    getUser(id: ID!): User
  }
  
  type MutationResponse {
    code: String!
  }

  type Mutation {
    createUser(input: CreateUser!): MutationResponse!
  }
`;

export default userTypeDefs;
