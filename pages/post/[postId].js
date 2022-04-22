import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { query } from "../../graphql-queries/query/GET_SINGLE_POST";

const SinglePost = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: router.query.postId,
    },
  });
  console.log(data);
  if (loading) return <p>Loading..</p>;
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h2>{data.post.title}</h2>
      <p>{data.post.body}</p>
    </div>
  );
};
export default SinglePost;
