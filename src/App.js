import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Users from "./Component/Users";
import UserDetails from "./Component/UserDetails";
import Posts from "./Component/Posts";
import PostDetails from "./Component/PostDetails";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Form from "./Component/Form";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/users" render={(props) => <Users {...props} />} />
        <Route
          path="/userdetails/:id"
          render={(props) => <UserDetails {...props} />}
        />
        <Route path="/posts" render={(props) => <Posts {...props} />} />
        <Route
          path="/postdetails/:id"
          render={(props) => <PostDetails {...props} />}
        />
        <Route path="/form" render={(props) => <Form {...props} />} />

        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
