import React, { useContext, useState } from "react";
import TravelContext from "../../context/travel/TravelContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useContext(TravelContext);
  const [trigger, setTrigger] = useState(0);
  const mainData = data.mainData && data.mainData[0];
  const triggerHeight = data.mainData && data.mainData.length - 1;
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${
          data.essentialData && data.essentialData.banner
        })`,
      }}
    >
      <section className="banner">
        <div className="container">
          <div className="banner-left">
            <h1 className="heading">{mainData && mainData.name}</h1>
            <p className="text">{mainData && mainData.descriptionHome}</p>
            <Link to="/booking" className="btn">
              Booking{" "}
              <img
                src={data.essentialData && data.essentialData.longArrow}
                alt=""
              />
            </Link>
          </div>
          <div className="banner-right">
            <div className="slider">
              {data.mainData &&
                data.mainData.map((data, index) => (
                  <Link
                    to={`/booking/${data.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
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
                <img
                  src={data.essentialData && data.essentialData.arrow}
                  alt=""
                />
              </div>
              <div
                className={`trigger-right ml-1 ${
                  triggerHeight === trigger ? "disable" : ""
                }`}
                onClick={() =>
                  setTrigger(
                    trigger >= triggerHeight ? triggerHeight : trigger + 1
                  )
                }
              >
                <img
                  src={data.essentialData && data.essentialData.arrow}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
