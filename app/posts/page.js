import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: 120,
  });
  const toDo = await response.json();

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>posts page</h1>
      {toDo.map((post) => (
        <div
          key={post.id}
          style={{
            width: "50%",
            margin: "10px auto",
            textAlign: "center",
            padding: "10px",
            background: "white",
            color: "black",
          }}
        >
          <h2>{post.id}</h2>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <button
            style={{
              background: "#00aec6",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Link href={`/posts/${post.id}`}>Show Post</Link>
          </button>
        </div>
      ))}
    </>
  );
}
