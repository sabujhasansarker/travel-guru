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
