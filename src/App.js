import React, { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App(props) {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({
    school: "",
    title: "",
    year: "",
    year2: "",
  });
  const [experience, setExperience] = useState({
    name: "",
    title: "",
    task: "",
    year: "",
    year2: "",
  });
  const [showGeneralInputOrDisplay, setShowGeneralInputOrDisplay] =
    useState(true);
  const [showEducationInputOrDisplay, setShowEducationInputOrDisplay] =
    useState(true);
  const [showExperienceInputOrDisplay, setShowExperienceInputOrDisplay] =
    useState(true);

  const generalLog = (name, email, phone) => {
    setGeneral({ name: name, email: email, phone: phone });
  };

  const educationLog = (school, title, year, year2) => {
    setEducation({
      school: school,
      title: title,
      year: year,
      year2: year2,
    });
  };

  const experienceLog = (name, title, task, year, year2) => {
    setExperience({
      name: name,
      title: title,
      task: task,
      year: year,
      year2: year2,
    });
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setShowGeneralInputOrDisplay(false);
  };

  const handleGeneralEdit = () => {
    setShowGeneralInputOrDisplay(true);
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    setShowEducationInputOrDisplay(false);
  };

  const handleEducationEdit = () => {
    setShowEducationInputOrDisplay(true);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    setShowExperienceInputOrDisplay(false);
  };

  const handleExperienceEdit = () => {
    setShowExperienceInputOrDisplay(true);
  };

  return (
    <div className="container">
      <div className="general">
        {showGeneralInputOrDisplay ? (
          <form onSubmit={handleGeneralSubmit}>
            <General generalLog={generalLog} />
          </form>
        ) : null}
        {!showGeneralInputOrDisplay ? (
          <div className="generalDisplay">
            <p>
              <span>Name:</span>
              <span>{general.name}</span>
            </p>
            <p>
              <span>Email:</span>
              <span>{general.email}</span>
            </p>
            <p>
              <span>Phone Number:</span>
              <span>{general.phone}</span>
            </p>
            <button onClick={handleGeneralEdit}>Edit</button>
          </div>
        ) : null}
      </div>
      <div className="education">
        {showEducationInputOrDisplay ? (
          <form onSubmit={handleEducationSubmit}>
            <Education educationLog={educationLog} />
          </form>
        ) : null}
        {!showEducationInputOrDisplay ? (
          <div className="educationDisplay">
            <p>
              <span>School Name:</span>
              <span>{education.school}</span>
            </p>
            <p>
              <span>Field of Study:</span>
              <span>{education.title}</span>
            </p>
            <p>
              <span>Time of Study:</span>
              <span>
                {education.year} - {education.year2}
              </span>
            </p>
            <button onClick={handleEducationEdit}>Edit</button>
          </div>
        ) : null}
      </div>
      <div className="experience">
        {showExperienceInputOrDisplay ? (
          <form onSubmit={handleExperienceSubmit}>
            <Experience experienceLog={experienceLog} />
          </form>
        ) : null}
        {!showExperienceInputOrDisplay ? (
          <div className="experienceDisplay">
            <p>
              <span>Company Name:</span>
              <span>{experience.name}</span>
            </p>
            <p>
              <span>Job Title:</span>
              <span>{experience.title}</span>
            </p>
            <p>
              <span>Responsibilities:</span>
              <span>{experience.task}</span>
            </p>
            <p>
              <span>Time of Employment:</span>
              <span>
                {experience.year}-{experience.year2}
              </span>
            </p>
            <button onClick={handleExperienceEdit}>Edit</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
