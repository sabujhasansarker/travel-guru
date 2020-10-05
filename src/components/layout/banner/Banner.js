import React, { useContext } from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import TravelContext from "../../../context/travel/TravelContext";

const Banner = ({ currentData }) => {
  const { data } = useContext(TravelContext);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          data.essentialData && data.essentialData.banner
        })`,
      }}
    >
      <div className="banner-overly">
        <div className="container">
          <BannerLeft
            data={
              currentData
                ? currentData
                : data.mainData && data.mainData[Math.floor(Math.random() * 4)]
            }
            longArrow={data.essentialData && data.essentialData.longArrow}
            booking={currentData && true}
          />
          <BannerRight
            booking={currentData && true}
            data={currentData && currentData}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
