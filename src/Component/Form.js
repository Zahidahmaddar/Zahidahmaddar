import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("http://3.236.96.9:8000/login", {
    //   method: "POST",
    //   headers: {
    //     "X-RequestedTimeUTC": Date.UTC(),
    //     "X-RequestedDateTimeStg": Date.UTC(),
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // });
    axios({
      method: "POST",
      url: "http://3.236.96.9:8000/login",
      headers: {
        "X-RequestedTimeUTC": Date.UTC(),
        "X-RequestedDateTimeStg": Date.UTC(),
      },
      data: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login-info">
          <div className="user-details">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="user-details">
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
