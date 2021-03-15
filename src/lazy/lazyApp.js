import React, { Suspense,Redirect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Hello from "./hello";
import Home from "./home";
// import Sample from "./sample";

const Sample=React.lazy(()=>import('./sample'));
const Hello=React.lazy(()=>import('./hello'));

export default function App() {
  return (
    <div>
      <Router>
          <Suspense fallback ={<div>Loading...</div>}>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/hello">
            <Hello />
          </Route>
          <Route exact={true} path="/sample">
            <Sample />
          </Route>
          
          <Route>
            <Redirect to="/"/>
          </Route>

            </Switch>
            </Suspense>
      </Router>
    </div>
  );
}
