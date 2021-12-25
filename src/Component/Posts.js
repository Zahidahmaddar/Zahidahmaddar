import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
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
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item) => (
                <tr>
                  <td scope="row">{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button
                      onClick={() =>
                        props.history.push(`/postDetails/${item.id}`)
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

export default Posts;
