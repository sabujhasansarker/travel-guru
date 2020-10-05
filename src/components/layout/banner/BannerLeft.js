import React from "react";
import { Link } from "react-router-dom";

const BannerLeft = ({ data, longArrow, booking }) => {
  return (
    <div className="banner-left">
      <h1 className="heading">{data && data.name}</h1>
      <p className="text">
        {!booking ? data && data.descriptionHome : data && data.descriptionDes}
      </p>
      {!booking && (
        <Link to="/booking" className="btn">
          Booking <img src={longArrow} alt="" />
        </Link>
      )}
    </div>
  );
};

export default BannerLeft;
