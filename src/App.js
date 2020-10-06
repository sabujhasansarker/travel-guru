import React, { useContext } from "react";
import TravelContext from "./context/travel/TravelContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Search from "./components/pages/Search";

const App = () => {
  const { data, black, user, logout } = useContext(TravelContext);
  return (
    <Router>
      <Navbar
        logo={
          black
            ? data.essentialData && data.essentialData.blackLogo
            : data.essentialData && data.essentialData.logo
        }
        search={data.essentialData && data.essentialData.search}
        black={black}
        user={user}
        logout={logout}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking/:name" component={Booking} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/search/:name" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
