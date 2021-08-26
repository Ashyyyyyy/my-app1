import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home/index";
import Welcome from "./Welcome/index";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default App;
