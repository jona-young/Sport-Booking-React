import React, { useState, useEffect } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import format from "date-fns/format";
import addHours from "date-fns/addHours";

function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([{}]);
  const dateFormat = "yyyy-MM-d-p";
  const rows = [];
  let curHours = setHours(curDate, 7);
  let curTime = setMinutes(curHours, 0);
  let endHours = setHours(curDate, 22);
  let endTime = setMinutes(endHours, 0);
  let days = [];

  //If the component updates or mounts, call fetchBookings()
  useEffect(() => {
    fetchBookings();
  }, []);

  //Pulls the list of tennis bookings
  //TODO: Currently pulls ALL tennis bookings...can you either pull all bookings on the day of
  //TODO: OR pull the bookings of the specific curTime which is a date and time element...
  const fetchBookings = () => {
    console.log("Fetching...");

    fetch("http://127.0.0.1:8000/api/tbook-list/")
      .then((response) => response.json())
      .then((data) => setCourtBookings(data));
  };

  //Number of rows is denoted by the while loop (below)...could just set another for loop with the time counter
  while (curTime <= endTime) {
    //Number of columns as per the Hours Column to the 4 Courts
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        days.push(
          <div
            className="sched__col cell coltime"
            key={`Time-${format(curTime, "p")}`}
          >
            {format(curTime, "p")}
          </div>
        );
      } else {
        //TODO: Set if statement if (court booking on curTime & on specific court), then display from DRF API
        //TODO: curtime match with court_date & court_time on django & specific court off i and court_number
        {
          /*
        if (format(curTime, someDateFormat) "search is true within fetchTasksData of court_date & court_time"
            && strVar(i) "search is true within fetchTasksData of court_number")
        ? days.push('Booked Court Information')
        : days.push('Book a Court Cell Below')
        */
        }
        days.push(
          <div
            className="sched__col cell"
            key={`${i}--${format(curTime, dateFormat)}`}
          >
            Book a Court!
            <button
              className="sched__button"
              //TODO: may have to change name for easier pickup in a function on click
              name={`${i}--${format(curTime, dateFormat)}`}
              value={`${i}--${format(curTime, dateFormat)}`}
            >
              Click here!
            </button>
          </div>
        );
      }
    }

    rows.push(
      <div className="sched__row" key={curTime}>
        {days}
      </div>
    );
    days = [];
    curTime = addHours(curTime, 1);
  }
  return <div className="sched__body">{rows}</div>;
}

export default TimeSched;
