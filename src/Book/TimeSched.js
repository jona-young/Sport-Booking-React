import React, { useState, useEffect } from "react";
import HourlySched from "./HourlySched";
import format from "date-fns/format";
import {axiosInstance} from "../Users/axiosApi";

function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([{}]);

  //Pulls booking list from DRF API on curDate
  const fetchBookings = () => {
    const urlDateFormat = "yyyy-MM-d";

    try {
          const response = axiosInstance.get(`http://127.0.0.1:8000/api/tbook-list/${format(curDate, urlDateFormat)}/`)
              .then((response) => {
              setCourtBookings(response.data)
          });
      } catch (error) {
        throw error;
      }
  };

  //Every time the curDate changes or updates, run fetchBookings
  useEffect(() => {
    fetchBookings();
  }, [curDate]);


  return <HourlySched curDate={curDate} courtBookings={courtBookings} />;
}

export default TimeSched;
