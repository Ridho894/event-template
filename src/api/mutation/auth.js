import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation ($input: RegisterInput) {
    register(input: $input) {
      token
      user {
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`;
