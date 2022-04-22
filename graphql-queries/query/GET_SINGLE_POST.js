import gql from "graphql-tag";

export const query = gql`
  query getSinglePost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;
