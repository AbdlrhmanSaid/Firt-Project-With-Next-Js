import { Suspense } from "react";
import Loading from "../../component/Loading";
import PostDetail from "../../component/PostDetail";

export default async function PostChoosen(props) {
  const postId = props.params.id;

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>PostChoosen</h1>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>{postId}</h1>
      <Suspense fallback={<Loading />}>
        <PostDetail postId={postId} />
      </Suspense>
    </>
  );
}
