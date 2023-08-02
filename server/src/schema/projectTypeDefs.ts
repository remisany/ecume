import gql from "graphql-tag";

const projectTypeDefs = gql`
  type Project {
    _id: ID!
    title: String!
  }
  
  type findProjectResponse {
    code: String!
    projects: [Project]
  }

  type Query {
    findProject: findProjectResponse!
  }
    
  type createProjectResponse {
    _id: ID!
    code: String!
  }

  type Mutation {
    createProject(title: String!): createProjectResponse!
  }
`;

export default projectTypeDefs;


/*
 */
