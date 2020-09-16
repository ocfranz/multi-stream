import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loading from "./components/Loading";
const PageApp = lazy(() => import("./pages/App"));
import PageHome from "./pages/Home";
const Page404 = lazy(() => import("./pages/404"));
const App = ({}) => {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename="">
        <Switch>
          <Redirect
            from="/:url*(/+)"
            to={window.location.pathname.slice(0, -1)}
          />
          <Route exact path="/" component={PageHome} />

          <Route exact path="/app" component={PageApp} />

          <Route path="/load" component={Loading} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </Suspense>
  );
};
export default App;
