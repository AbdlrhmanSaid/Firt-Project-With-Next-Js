import React from "react";

export default async function PostDetail({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: 120,
    }
  );
  const post = await response.json();

  return (
    <div>
      <div
        key={post.userId}
        style={{
          border: "1px solid white ",
          width: "50%",
          margin: "10px auto",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
