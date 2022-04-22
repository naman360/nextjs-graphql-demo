import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { query } from "../graphql-queries/mutations/CREATE_POST";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [addPost, { data, loading }] = useMutation(query, {
    onCompleted(data) {
      console.log(data);
      setLoaded(true);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    addPost({
      variables: {
        input: {
          title: title,
          body: body,
        },
      },
    });
  }
  console.log(loading);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <p>Title : </p>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <p>Body : </p>
        <input type="text" onChange={(e) => setBody(e.target.value)} />
      </div>
      <input type="submit" value="Submit" />

      {loaded ? (
        <div>
          <h2>Created Post:- </h2>
          <h3>Title:-</h3>
          <p>{data?.createPost.title}</p>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
