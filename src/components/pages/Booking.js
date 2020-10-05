import React, { useContext, useEffect } from "react";
import Banner from "../layout/banner/Banner";
import TravelContext from "../../context/travel/TravelContext";

const Booking = ({ match }) => {
  const { data, whiteLogo } = useContext(TravelContext);
  useEffect(() => {
    whiteLogo();
  }, []);
  const currentData =
    data.mainData &&
    data.mainData.filter(
      (d) => d.name.split(" ").join("-").toLowerCase() == match.params.name
    );
  return (
    <section className="booking">
      <Banner
        currentData={currentData && currentData[0]}
        banner={data.essentialData && data.essentialData.banner}
        longArrow={data.essentialData && data.essentialData.longArrow}
        mainData={data.mainData && data.mainData}
      />
    </section>
  );
};

export default Booking;
