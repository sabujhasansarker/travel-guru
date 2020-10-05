import React, { useContext, useEffect } from "react";
import TravelContext from "../../context/travel/TravelContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { blackLogo } = useContext(TravelContext);
  useEffect(() => {
    blackLogo();
  }, []);
  return (
    <section className="login">
      <form>
        <h1 className="heading">Login</h1>
        <div className="form-group">
          <input type="text" placeholder="Username or Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Passowrd" />
        </div>
        <div className="form-group d-flex">
          <div className="form-item">
            <input type="checkbox" name="Remember Me" id="" />
            <label htmlFor="Remember">Remember Me</label>
          </div>
          <div className="form-item">
            <Link to="forget-password">Forgot Password</Link>
          </div>
        </div>
        <Link className="btn" to="/">
          Login
        </Link>
      </form>
    </section>
  );
};

export default Login;
