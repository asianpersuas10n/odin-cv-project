import React, { useState } from "react";

function Experience({ experienceLog }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const taskChange = (e) => {
    setTask(e.target.value);
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
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          onChange={(e) => nameChange(e)}
          value={name}
        />
      </p>
      <p>
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => titleChange(e)}
          value={title}
        />
      </p>
      <p>
        <label htmlFor="task">Responsibilities of your Position</label>
        <input
          type="text"
          id="task"
          onChange={(e) => taskChange(e)}
          value={task}
        />
      </p>
      <p>
        <p>Time of Employment</p>
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
          onClick={() => experienceLog(name, title, task, time, time2)}
        />
      </p>
    </div>
  );
}

export default Experience;
