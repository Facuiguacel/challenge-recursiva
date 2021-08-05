import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Weather from "./components/weather";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/404" component={NotFound} />
          <Redirect from="/" exact to="/weather" />
          <Redirect to="/404" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
