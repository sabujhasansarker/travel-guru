import React, { useContext, useEffect } from "react";
import TravelContext from "../../context/travel/TravelContext";
import { Link } from "react-router-dom";

const Registration = () => {
  const { blackLogo } = useContext(TravelContext);
  useEffect(() => {
    blackLogo();
  }, []);
  return (
    <section className="login">
      <form>
        <h1>Create an account</h1>
        <div className="form-group">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Username or Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Passowrd" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Passowrd" />
        </div>
        <Link className="btn" to="/">
          Create an account
        </Link>
        <p className="text-center mt-1">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="or text-center my-2">Or</div>
    </section>
  );
};

export default Registration;
