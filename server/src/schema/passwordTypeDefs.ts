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
    definePassword(password: String!): DefineResponse
    forgotPassword(email: String!): ForgotResponse
  }
`;

export default passwordTypeDefs;
