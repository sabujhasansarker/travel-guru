import React, { useReducer, useEffect } from "react";

import { GETDATA, BLACK, GETUSER, LOGOUT, USERERROR } from "../type";
import TravelContext from "./TravelContext";
import TravelReducer from "./TravelReducer";

import { auth, google, facebook } from "../../config/fire";

const TravelState = ({ children }) => {
  const initialState = {
    data: [],
    loading: true,
    black: false,
    user: null,
  };

  const [state, dispatch] = useReducer(TravelReducer, initialState);

  // get data

  useEffect(() => {
    fetch("/travelData/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: GETDATA,
          payload: res,
        });
      });
    getUser();
  }, []);

  // set black logo
  const blackLogo = () => {
    dispatch({
      type: BLACK,
      payload: true,
    });
  };
  // white
  const whiteLogo = () => {
    dispatch({
      type: BLACK,
      payload: false,
    });
  };

  const getUser = (reg) => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: GETUSER,
          payload: reg ? reg : user.providerData[0],
        });
      } else {
        dispatch({
          type: USERERROR,
        });
      }
    });
  };

  const logout = () => {
    auth.signOut().then(() => {
      dispatch({
        type: LOGOUT,
      });
    });
  };

  const googleReg = () => {
    try {
      auth.signInWithPopup(google);
    } catch (err) {
      console.log(err.message);
    }
  };

  const facebookReg = () => {
    try {
      auth.signInWithPopup(facebook);
    } catch (err) {
      console.log(err.message);
    }
  };

  const { data, loading, black, user } = state;
  return (
    <TravelContext.Provider
      value={{
        data,
        loading,
        black,
        user,
        blackLogo,
        whiteLogo,
        getUser,
        logout,
        googleReg,
        facebookReg,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelState;
