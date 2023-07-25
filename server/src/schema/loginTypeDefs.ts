import gql from "graphql-tag";

const loginTypeDefs = gql`
  type LoginResponse {
    code: String!
    token: String
  }
  
  type Mutation {
    login(email: String!, password: String!): LoginResponse
  }
`;

export default loginTypeDefs;
