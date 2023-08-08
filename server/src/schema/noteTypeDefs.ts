import gql from "graphql-tag";

const noteTypeDefs = gql`
  type Note {
    id: ID!
    title: String!
    content: String
    uri: String
    createdAt: String!
    updatedAt: String!
    user: ID!
    project: ID
    type: Int!
    inspiration: Int!
  }
  
  type CreateNoteResponse {
    code: String!
  }
  
  input NoteContent {
    title: String!
    content: String
    image: String
    type: Int!
    inspiration: Int!
    project: ID
  }
    
  type Mutation {
    createNote(input: NoteContent!): CreateNoteResponse!
  }
`;

export default noteTypeDefs;
