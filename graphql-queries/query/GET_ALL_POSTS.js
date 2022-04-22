import gql from "graphql-tag";

const query = gql`
  query getAllPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;
console.log(gql);
export { query };
