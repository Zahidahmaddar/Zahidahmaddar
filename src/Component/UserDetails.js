import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function UserDetails({ match, history }) {
  const id = match.params.id;

  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUserDetails(json);
      });
  }, []);
  return !userDetails ? (
    <ClipLoader />
  ) : (
    <>
      <div className="back-button">
        <button onClick={() => history.goBack()}>Go Back</button>
      </div>

      <div className="card-board">
        {/* <div className="left" style={{ width: "20%" }}>
        <p>Id :</p>
        <p>Name :</p>
        <p>Email :</p>
        <p>Username :</p>
      </div>
      <div className="right">
        <p>{userDetails.id}</p>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.username}</p>
      </div> */}
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Id</p>
          <p>{userDetails.id}</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Name</p>
          <p>{userDetails.name}</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Email</p>
          <p>{userDetails.email}</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <p style={{ width: "200px" }}>Username</p>
          <p>{userDetails.username}</p>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
