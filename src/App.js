import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Todos from "./components/todos/Todos";

function App() {
  let user = localStorage.getItem("user");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard/:id">
            <Todos />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
