import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import PageApp from "./pages/App";
import PageHome from "./pages/Home";
import Page404 from "./pages/404";
const App = ({}) => {
  return (
    <Router basename="">
      <Switch>
        <Redirect
          from="/:url*(/+)"
          to={window.location.pathname.slice(0, -1)}
        />
        <Route exact path="/" component={PageHome} />
        <Route path="/app" component={PageApp} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
};
export default App;
