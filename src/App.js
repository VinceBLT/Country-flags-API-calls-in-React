import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
