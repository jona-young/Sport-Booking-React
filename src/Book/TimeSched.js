import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import format from "date-fns/format";
import addHours from "date-fns/addHours";
import React from "react";

function TimeSched({ curDate }) {
  const dateFormat = "d-MM-yyyy-p";
  const rows = [];
  let curHours = setHours(curDate, 7);
  let curTime = setMinutes(curHours, 0);
  let endHours = setHours(curDate, 22);
  let endTime = setMinutes(endHours, 0);
  let days = [];

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
            {/* TODO: This is where you place pre-booked court times to show the court has been booked */}
            {format(curTime, "p")}
          </div>
        );
      } else {
        //TODO: This is where you can give each cell a name value based off row (hour) and column (court)
        //TODO: which will be useful in sending form information to DRF API.

        //TODO: Also this is where you run a nested IF statement if the date, time, and court is already booked?
        //TODO: ...See conditional in Book.JS because I deleted the logic below
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
