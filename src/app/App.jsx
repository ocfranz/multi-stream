import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageApp from "./pages/App";
import PageHome from "./pages/Home";
import Page404 from "./pages/404";
const App = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" exact={true} component={PageHome} />
        <Route exact path="/app"  component={PageApp} />
        <Route path="*" exact={true} component={Page404} />
      </Switch>
    </Router>
  );
};
export default App;
