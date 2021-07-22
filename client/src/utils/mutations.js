import { gql } from "@apollo/client";

export const SAVE_VISITED = gql`
  mutation saveVisited($parkId: ID!) {
    saveVisited(parkId: $parkId) {
      email
      visitedParks {
        phone_number
        city
      }
    }
  }
`;
export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
      profile {
        email
      }
    }
  }
`;
export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      profile {
        email
      }
    }
  }
`;
