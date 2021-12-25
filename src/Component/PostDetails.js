import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function PostDetails({ match, history }) {
  const id = match.params.id;

  const [postDetails, setPostDetails] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPostDetails(json);
      });
  }, []);
  return !postDetails ? (
    <ClipLoader />
  ) : (
    <>
      <div className="back-button">
        <button onClick={() => history.goBack()}>Go Back</button>
      </div>
      <div className="card-board">
        {/* <div className="left" style={{ width: "20%" }}> */}
        {/* <p>Id :</p>
        <p>Title :</p>
        <p>body :</p>
      </div>
      <div className="right" style={{ width: "50%" }}>
        <p>{postDetails.id}</p>
        <p>{postDetails.title}</p>
        <p>{postDetails.body}</p>
        */}
        {/* </div> */}
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>id</p>
          <p>{postDetails.id}</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Title</p>
          <p>{postDetails.title}</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Body</p>
          <p>{postDetails.body}</p>
        </div>
        <hr />
      </div>
    </>
  );
}

export default PostDetails;
