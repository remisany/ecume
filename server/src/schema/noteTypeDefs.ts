import gql from "graphql-tag";

const noteTypeDefs = gql`
  type Note {
    id: ID!
    user: User!
    date: String!
    content: String!
    title: String!
  }
`;

export default noteTypeDefs;
