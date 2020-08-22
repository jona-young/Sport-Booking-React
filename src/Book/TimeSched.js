import React, { useState, useEffect } from "react";
import HourlySched from "./HourlySched";
import format from "date-fns/format";

function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([{}]);

  //Pulls booking list from DRF API on curDate
  const fetchBookings = () => {
    const urlDateFormat = "yyyy-MM-d";

    fetch(
      `http://127.0.0.1:8000/api/tbook-list/${format(curDate, urlDateFormat)}/`
    )
      .then((response) => response.json())
      .then((data) => setCourtBookings(data));
  };

  //Every time the curDate changes or updates, run fetchBookings
  useEffect(() => {
    fetchBookings();
  }, [curDate]);

  console.log("cb: ", courtBookings);

  return <HourlySched curDate={curDate} courtBookings={courtBookings} />;
}

export default TimeSched;
