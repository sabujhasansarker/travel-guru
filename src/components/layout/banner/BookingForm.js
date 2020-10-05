import React from "react";
import { Link } from "react-router-dom";

const BookingForm = ({ data }) => {
  const origin = ["dhaka", "rangpur", "cummila"];
  return (
    <div className="banner-right-form">
      <form className="form">
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <select name="origin" id="origin">
            {origin.map((o, index) => (
              <option value={o} key={index}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="destination">destination</label>
          <select name="destination" id="destination">
            <option value={data && data.name}>{data.name}</option>
          </select>
        </div>
        <div className="form-group d-flex">
          <div className="form-item">
            <label htmlFor="form">Form</label>
            <input
              type="date"
              id="form"
              value={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="to">to</label>
            <input
              type="date"
              id="to"
              value={new Date().toISOString().slice(0, 10)}
            />
          </div>
        </div>
        <div className="form-group">
          <Link to={`/search/${data && data.name.split(" ").join("-").toLowerCase()}`} className="btn">
            Start booking
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
