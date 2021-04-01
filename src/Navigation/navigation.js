import React from "react";
// Routers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import SimpleUser from "../Screen/simpleUser";
import DashBoard from "../Screen/dashboard.js";
// import NotFound from "../Screens/NotFound/404";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/simpleUser/:id" component={SimpleUser} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Navigation;
