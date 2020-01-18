import { gql } from 'apollo-boost';

export const GET_ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
