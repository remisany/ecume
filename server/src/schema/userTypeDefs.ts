import gql from "graphql-tag";

const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    hasChangePassword: Boolean!
    notes: [ID]
    project: [ID]
  }
  
  type Query {
    _dummy: String
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
