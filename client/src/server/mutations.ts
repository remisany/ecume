import {gql} from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!) {
    createProject(title: $title) {
        _id
        code
    }
  }
`;

export const CREATE_NOTE = gql`
  mutation CreateNote($input: NoteContent!) {
    createNote(input: $input) {
        code
    }
  }
`;
