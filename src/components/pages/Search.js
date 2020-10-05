import React, { useContext, useEffect } from "react";
import TravelContext from "../../context/travel/TravelContext";
import { Link } from "react-router-dom";

const Search = ({ match }) => {
  const { blackLogo, data } = useContext(TravelContext);
  useEffect(() => {
    blackLogo();
  }, []);
  const currentData =
    data.mainData &&
    data.mainData.filter(
      (d) => d.name.split(" ").join("-").toLowerCase() == match.params.name
    );
  console.log(currentData);
  const va =
    "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=23.38248,92.293043+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  return (
    <section className="search">
      <div className="container">
        <div className="search-left">
          <h1>Stay in {currentData && currentData[0].name}</h1>
          <div className="search-hotel-container">
            {currentData &&
              currentData[0].hotel.map((h) => (
                <div className="single-hotel mt-3">
                  <div className="single-hotel-left">
                    <img src={h.hotelImg} alt="" />
                  </div>
                  <div className="single-hotel-right">
                    <h2>{h.hotelName}</h2>
                    <p className="flex my-1">
                      <span>{h.guest} gusts</span>{" "}
                      <span className="ml-1">{h.bed} bad</span>
                      <span className="ml-1">{h.bath} bath</span>
                    </p>
                    <p className="text ">Wif Air conditioning Kitchen</p>
                    <p className="text my-1">
                      Cancellation fexibility availiable
                    </p>
                    <div className="flex">
                      <div className="left  ">
                        <img
                          src={data.essentialData && data.essentialData.star}
                          alt=""
                        />{" "}
                        <b>{h.review}</b>
                      </div>
                      <div className="right ml-2">
                        <p>
                          <b>${h.price}</b>/night <span>$167 total</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="search-right">
          <iFrame
            src={`https://maps.google.com/maps?q=${
              currentData && currentData[0].lat
            }, ${currentData && currentData[0].lng}&z=9&output=embed`}
            frameborder="0"
          ></iFrame>
        </div>
      </div>
    </section>
  );
};

export default Search;
