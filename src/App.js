import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Weather from "./components/weather";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/weather" component={Weather} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/" exact to="/weather" />
        <Redirect to="/404" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
