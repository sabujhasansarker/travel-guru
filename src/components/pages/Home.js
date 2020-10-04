import React, { useContext } from "react";
import TravelContext from "../../context/travel/TravelContext";

const Home = () => {
  const { data } = useContext(TravelContext);
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${
          data.essentialData && data.essentialData.banner
        })`,
      }}
    >
      <section className="banner"></section>
    </div>
  );
};

export default Home;
