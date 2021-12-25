import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Users(props) {
  console.log(props);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <ClipLoader size="50" color="white" />
        </div>
      ) : (
        <>
          <h1>Users</h1>
          <table className="table text-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr>
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <button
                      onClick={() =>
                        props.history.push(`/userdetails/${item.id}`)
                      }
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Users;
