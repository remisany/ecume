import gql from "graphql-tag";

const noteTypeDefs = gql`
  type Note {
    id: ID!
    title: String
    content: String! | Buffer!
    create: Date!
    update: Date
    user: ID!
    project: ID
    type: String!
    inspiration: String!
  }
    
  type Mutation {
  }
`;

export default noteTypeDefs;
