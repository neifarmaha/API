import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserList } from "./components/UserList";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={UserList} exact />
          <Route
            path="/profile/:id"
            exact
            render={(props) => <Details {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
