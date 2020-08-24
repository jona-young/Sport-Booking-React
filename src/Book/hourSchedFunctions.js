import React from "react";
import { Link } from "react-router-dom";

export const bookACourt = (timeSlots, courtCode, courtTime, courtDate, i) => {
  timeSlots.push(
    <div className="sched__col cell" key={courtCode}>
      <Link
        className="sched__link"
        to={{
          pathname: "/tennis-form",
          state: {
            court_d: courtDate,
            court_t: courtTime,
            court_n: i,
          },
        }}
      >
        Book a Court!
      </Link>
    </div>
  );
};

export const bookedCourt = (timeSlots, courtCode, i, courtBookings, bx) => {
  timeSlots.push(
    <div className="sched__col cell" key={courtCode} name={i}>
      {courtBookings[bx].court_date}
      <br />
      Court {courtBookings[bx].court_number}
      <br />
      Booked by - {courtBookings[bx].player1}
    </div>
  );
};

export const timeCell = (timeSlots, courtTime) => {
  timeSlots.push(
    <div className="sched__col cell coltime" key={`Time-${courtTime}`}>
      {courtTime}
    </div>
  );
};

export const timeRow = (rows, curTime, timeSlots) => {
  rows.push(
    <div className="sched__row" key={curTime}>
      {timeSlots}
    </div>
  );
};
