import React, { useState, useEffect } from "react";
import HourlySched from "./HourlySched";
import format from "date-fns/format";
import {axiosInstance} from "../Users/axiosApi";

function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([0]);

  //Pulls booking list from DRF API on curDate
  const axiosBookings = () => {
    const urlDateFormat = "yyyy-MM-d";

    axiosInstance.get(`http://127.0.0.1:8000/api/tbook-list/${format(curDate, urlDateFormat)}/`)
        .then((response) => {
          setCourtBookings(response.data)
        }).catch ((error) => {
        console.log(error.response)
        throw error;
        })
  };

  //Every time the curDate changes or updates, run fetchBookings
  useEffect(() => {
    axiosBookings();
  }, [curDate]);


  return <HourlySched curDate={curDate} courtBookings={courtBookings} />;
}

export default TimeSched;
