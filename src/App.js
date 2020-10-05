import React, { useContext } from "react";
import TravelContext from "./context/travel/TravelContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";

const App = () => {
  const { data } = useContext(TravelContext);
  return (
    <Router>
      <Navbar
        logo={data.essentialData && data.essentialData.logo}
        search={data.essentialData && data.essentialData.search}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking/:name" component={Booking} />
      </Switch>
    </Router>
  );
};

export default App;
