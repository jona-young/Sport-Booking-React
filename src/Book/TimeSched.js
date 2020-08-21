import React, { useState, useEffect } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import format from "date-fns/format";
import addHours from "date-fns/addHours";

function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([{}]);
  const dateFormat = "yyyy-MM-d-p";
  const rows = [];
  let timeSlots = [];
  let curTime = setMinutes(setHours(curDate, 7), 0);
  let endTime = setMinutes(setHours(curDate, 22), 0);

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

  //Sets # of rows from curTime & endTime (Club's Hours of Operations)
  while (curTime <= endTime) {
    //Sets # of columns, in this case 5 for time and 4 courts
    for (let i = 0; i < 5; i++) {
      //First column is the time
      if (i === 0) {
        const timeCell = format(curTime, "p");
        timeSlots.push(
          <div className="sched__col cell coltime" key={`Time-${timeCell}`}>
            {timeCell}
          </div>
        );
      } else {
        const courtNum = i.toString();
        const courtTime = format(curTime, "p");
        //Used as a value to prep DRF API form for booking
        const courtCode = courtNum + "--" + format(curTime, dateFormat);
        const bookACourt = () => {
          timeSlots.push(
            <div
              className="sched__col cell"
              key={`${i}--${format(curTime, dateFormat)}`}
            >
              <button
                className="sched__button"
                name={courtCode}
                value={courtCode}
              >
                Book a Court!
              </button>
            </div>
          );
        };

        //If no court bookings on the day, fill every cell with bookACourt
        if (courtBookings.length === 0) {
          bookACourt();
          //If there are court bookings on the day
        } else {
          //Cycles through each court booking to match to time and court cell
          for (let bx = 0; bx <= courtBookings.length; bx++) {
            let book = courtBookings[bx];
            //If courtBooking object is same time as row's time
            if (courtTime === book.court_time) {
              //If courtBooking object has same time and court number as row
              if (courtNum === book.court_number) {
                timeSlots.push(
                  <div
                    className="sched__col cell"
                    key={`${i}--${format(curTime, dateFormat)}`}
                  >
                    {courtBookings[bx].court_date}
                    <br />
                    Court {courtBookings[bx].court_number}
                    <br />
                    Booked by - {courtBookings[bx].author}
                  </div>
                );
                break;
                //If courtBooking object has same time but not same court number
              } else {
                bookACourt();
                break;
              }
              //If cycles through last object in courtBooking & no courtTime match
            } else if (bx == courtBookings.length - 1) {
              bookACourt();
              break;
              //Makes sure to cycle through whole courtBooking array for match
            } else {
              continue;
            }
          }
        }
      }
    }

    rows.push(
      <div className="sched__row" key={curTime}>
        {timeSlots}
      </div>
    );
    //Resets time slots
    timeSlots = [];
    curTime = addHours(curTime, 1);
  }
  return <div className="sched__body">{rows}</div>;
}

export default TimeSched;
