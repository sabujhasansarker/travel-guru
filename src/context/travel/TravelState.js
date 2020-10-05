import React, { useReducer, useEffect } from "react";

import { GETDATA, BLACK } from "../type";
import TravelContext from "./TravelContext";
import TravelReducer from "./TravelReducer";

const TravelState = ({ children }) => {
  const initialState = {
    data: [],
    loading: true,
    black: false,
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

  const { data, loading, black } = state;
  return (
    <TravelContext.Provider
      value={{ data, loading, black, blackLogo, whiteLogo }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelState;
