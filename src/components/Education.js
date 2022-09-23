import React, { useState } from "react";

function Education({ educationLog }) {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");

  const schoolChange = (e) => {
    setSchoolName(e.target.value);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const time2Change = (e) => {
    setTime2(e.target.value);
  };

  return (
    <div>
      <p>
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          id="schoolName"
          onChange={(e) => schoolChange(e)}
          value={schoolName}
        />
      </p>
      <p>
        <label htmlFor="title">Title of Study</label>
        <input
          type="text"
          id="title"
          onChange={(e) => titleChange(e)}
          value={title}
        />
      </p>
      <p>
        <span>Time of Study</span>
        <label htmlFor="time">From</label>
        <input
          type="date"
          id="time"
          onChange={(e) => timeChange(e)}
          value={time}
        />
      </p>
      <p>
        <label htmlFor="time2">To</label>
        <input
          type="date"
          id="time2"
          onChange={(e) => time2Change(e)}
          value={time2}
        />
      </p>
      <p>
        <input
          type="submit"
          value="Submit"
          onClick={() => educationLog(schoolName, title, time, time2)}
        />
      </p>
    </div>
  );
}

export default Education;
