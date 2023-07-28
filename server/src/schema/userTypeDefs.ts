import gql from "graphql-tag";

const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    hasChangePassword: Boolean!
    notes: [Note]
  }
  
  type Query {
    getUser(id: ID!): User
  }
  
  type MutationResponse {
    code: String!
  }

  type Mutation {
    createUser(email: String!): MutationResponse!
    deleteUser: MutationResponse!
  }
`;

export default userTypeDefs;
