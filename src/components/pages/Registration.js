import React, { useContext, useEffect, useState } from "react";
import TravelContext from "../../context/travel/TravelContext";
import { Link } from "react-router-dom";
import { auth } from "../../config/fire";

const Registration = () => {
  const { blackLogo } = useContext(TravelContext);
  useEffect(() => {
    blackLogo();
  }, []);

  // registration
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [alert, setAlert] = useState("");
  const { firstName, lastName, email, password1, password2 } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password1 || !password2) {
      setAlert("Please fill all of this field");
      clearAlert();
    } else {
      if (password1 !== password2) {
        setAlert("Password doesn't match");
        clearAlert();
      } else {
        try {
          const user = await auth.createUserWithEmailAndPassword(
            email,
            password1
          );
          auth.currentUser.updateProfile({
            displayName: firstName + " " + lastName,
          });
          console.log(user);
        } catch (err) {
          setAlert(err.message);
          clearAlert();
        }
      }
    }
  };
  const clearAlert = () => {
    setTimeout(() => {
      setAlert("");
    }, 100000);
  };
  return (
    <section className="login">
      {alert && <div className="alert text-center p-1 my-2">{alert}</div>}
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Create an account</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
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
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Create an account" />
        <p className="text-center mt-1">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="or text-center my-2">Or</div>
    </section>
  );
};

export default Registration;
