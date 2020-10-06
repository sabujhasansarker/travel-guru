import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../config/fire";
import TravelContext from "../../context/travel/TravelContext";

const Login = () => {
  const { blackLogo } = useContext(TravelContext);
  useEffect(() => {
    blackLogo();
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");
  const { email, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      setAlert(err.message);
      clearAlert();
    }
  };

  const clearAlert = () => {
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return (
    <section className="login">
      {alert && <div className="alert text-center p-1 my-2">{alert}</div>}
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username or Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Passowrd"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
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
        <input type="submit" value="Login" className="btn mt-1" />
        <p className="text-center mt-1">
          Don’t have an account?{" "}
          <Link to="/registration">Create an account</Link>
        </p>
      </form>
      <div className="or text-center my-2">Or</div>
    </section>
  );
};

export default Login;
