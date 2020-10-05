import React, { useReducer, useEffect } from "react";

import { GETDATA } from "../type";
import TravelContext from "./TravelContext";
import TravelReducer from "./TravelReducer";

const TravelState = ({ children }) => {
  const initialState = {
    data: [],
    loading: true,
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

  const { data, loading } = state;
  return (
    <TravelContext.Provider value={{ data, loading }}>
      {children}
    </TravelContext.Provider>
  );
};

export default TravelState;
