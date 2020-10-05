import React, { useEffect, useContext } from "react";
import Banner from "../layout/banner/Banner";
import TravelContext from "../../context/travel/TravelContext";

const Home = () => {
  const { whiteLogo } = useContext(TravelContext);
  useEffect(() => {
    whiteLogo();
  }, []);
  return (
    <section className="home">
      <Banner />
    </section>
  );
};

export default Home;
