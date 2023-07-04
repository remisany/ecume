const noteTypeDefs = `#graphql
  type Note {
    id: ID!
    user: User!
    content: String
    photoUrl: String
  }

  type Mutation {
    createNote(userId: ID!, content: String, photoUrl: String): Note!
  }
`;

export default noteTypeDefs;
