import {gql} from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!) {
    createProject(title: $title) {
        _id
        code
    }
  }
`;
