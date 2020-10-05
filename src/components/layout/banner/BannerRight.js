import React from "react";
import Slider from "./Slider";
import BookingForm from "./BookingForm";

const BannerRight = ({ booking, data }) => {
  return (
    <div className="banner-right">
      {booking ? <BookingForm data={data} /> : <Slider />}
    </div>
  );
};

export default BannerRight;
