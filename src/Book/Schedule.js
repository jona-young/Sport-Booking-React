import React, { useState } from "react";
import MonthHeader from "./MonthHeader.js";
import DayHeader from "./DayHeader.js";
import CourtNumbers from "./CourtNumbers.js";
import TimeSched from "./TimeSched.js";
import "./Schedule.css";

function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (dateVal) => {
    setCurrentDate(dateVal);
  };

  return (
    <div className="calendar__month">
      <MonthHeader curDate={currentDate} onDateUpdate={updateDate} />
      <DayHeader curDate={currentDate} onDateUpdate={updateDate} />
      <CourtNumbers />
      <TimeSched curDate={currentDate} />
    </div>
  );
}

export default Schedule;
