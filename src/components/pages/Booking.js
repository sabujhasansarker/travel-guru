import React, { Fragment, useContext } from "react";
import Banner from "../layout/Banner";
import TravelContext from "../../context/travel/TravelContext";

const Booking = ({ match }) => {
  const { data } = useContext(TravelContext);
  const currentData =
    data.mainData &&
    data.mainData.filter((data) => data.name == match.params.name);
  console.log(data);
  return (
    <Fragment>
      <Banner name={match.params.name} />
    </Fragment>
  );
};

export default Booking;
