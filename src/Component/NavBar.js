import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-buttons">
      <button>
        <Link to="/Home">Home</Link>
      </button>
      <button>
        <Link to="/users">Users</Link>
      </button>
      <button>
        <Link to="/posts">Posts</Link>
      </button>
      <button>
        <Link to="/form">Form</Link>
      </button>
    </div>
  );
}

export default NavBar;
