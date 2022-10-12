import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TaskListPage from "./views/TaskListPage";
import TaskDetailsPage from "./views/TaskDetailsPage";
import AboutUs from "./views/AboutUs";
import Login from "./login/Login";
import TaskEditPage from "./views/TaskEditPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/about-us" exact={true}>
              <AboutUs />
            </Route>
            <Route path="/" exact={true}>
              <TaskListPage />
            </Route>
            <Route path="/task-details" exact={true}>
              <TaskDetailsPage />
            </Route>
            <Route path="/edit/:id" exact={true}>
              <TaskEditPage />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
