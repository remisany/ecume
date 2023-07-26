import gql from "graphql-tag";

const passwordTypeDefs = gql`
  type DefineResponse {
    code: String!
    token: String
  }

  type ForgotResponse {
    code: String!
  }
  
  type Mutation {
    define(password: String!): DefineResponse
    forgot(email: String!): ForgotResponse
  }
`;

export default passwordTypeDefs;
