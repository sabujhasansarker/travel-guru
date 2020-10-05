import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TravelContext from "../../../context/travel/TravelContext";

const Slider = () => {
  const { data } = useContext(TravelContext);
  const [trigger, setTrigger] = useState(0);
  const mainData = data.mainData && data.mainData[0];
  const triggerHeight = data.mainData && data.mainData.length - 1;
  return (
    <Fragment>
      <div className="slider">
        {data.mainData &&
          data.mainData.map((data, index) => (
            <Link
              to={`/booking/${data.name.split(" ").join("-").toLowerCase()}`}
              key={index}
              className={`slider-single ${
                trigger == index ? "slider-active" : ""
              } ${trigger > index ? "slider-none" : ""} ${
                window.innerWidth > 646 &&
                index == triggerHeight - 1 &&
                "slider-last"
              }`}
              style={{ backgroundImage: `url(${data.img})` }}
            >
              <h2 className="heading"> {data && data.name}</h2>
            </Link>
          ))}
      </div>
      <div className="trigger mt-2">
        <div
          className={`trigger-left ${trigger === 0 ? "disable" : ""}`}
          onClick={() => setTrigger(trigger <= 0 ? 0 : trigger - 1)}
        >
          <img src={data.essentialData && data.essentialData.arrow} alt="" />
        </div>
        <div
          className={`trigger-right ml-1 ${
            triggerHeight === trigger ? "disable" : ""
          }`}
          onClick={() =>
            setTrigger(trigger >= triggerHeight ? triggerHeight : trigger + 1)
          }
        >
          <img src={data.essentialData && data.essentialData.arrow} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;
