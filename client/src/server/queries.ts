import {gql} from "@apollo/client";

export const FIND_PROJECT = gql`
  query {
    findProject {
      code
      projects {
        _id
        title
      }
    }
  }
`;
