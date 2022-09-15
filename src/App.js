import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGeneralInputOrDisplay: true,
      showEducationInputOrDisplay: true,
      showExperienceInputOrDisplay: true,
      name: "",
      email: "",
      phone: "",
      education: {
        school: "",
        title: "",
        year: "",
        year2: "",
      },
      experience: {
        name: "",
        title: "",
        task: "",
        year: "",
        year2: "",
      },
    };
    this.generalLog = this.generalLog.bind(this);
  }
  generalLog = (name, email, phone) => {
    this.setState({ name: name, email: email, phone: phone });
  };

  educationLog = (school, title, year, year2) => {
    this.setState({
      education: {
        school: school,
        title: title,
        year: year,
        year2: year2,
      },
    });
  };

  experienceLog = (name, title, task, year, year2) => {
    this.setState({
      education: {
        name: name,
        title: title,
        task: task,
        year: year,
        year2: year2,
      },
    });
  };

  handleGeneralSubmit = (e) => {
    e.preventDefault();
    this.setState({ showGeneralInputOrDisplay: false });
  };

  handleGeneralEdit = () => {
    this.setState({ showGeneralInputOrDisplay: true });
  };

  handleEducationSubmit = (e) => {
    e.preventDefault();
    this.setState({ showEducationInputOrDisplay: false });
  };

  handleEducationEdit = () => {
    this.setState({ showEducationInputOrDisplay: true });
  };

  handleExperienceSubmit = (e) => {
    e.preventDefault();
    this.setState({ showExperienceInputOrDisplay: false });
  };

  handleExperienceEdit = () => {
    this.setState({ showExperienceInputOrDisplay: true });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.showGeneralInputOrDisplay ? (
            <form onSubmit={this.handleGeneralSubmit}>
              <General onGeneral={this.generalLog} />
            </form>
          ) : null}
          {!this.state.showGeneralInputOrDisplay ? (
            <div className="generalDisplay">
              <p>{this.state.name}</p>
              <p>{this.state.email}</p>
              <p>{this.state.phone}</p>
              <button onClick={this.handleGeneralEdit}>Edit</button>
            </div>
          ) : null}
        </div>
        <div>
          {this.state.showEducationInputOrDisplay ? (
            <form onSubmit={this.handleGeneralSubmit}>
              <Education onEducation={this.educationLog} />
            </form>
          ) : null}
          {!this.state.showEducationInputOrDisplay ? (
            <div className="educationDisplay">
              <p>{this.state.education.school}</p>
              <p>{this.state.education.title}</p>
              <p>
                {this.state.education.year}-{this.state.education.year2}
              </p>
              <button onClick={this.handleEducationEdit}>Edit</button>
            </div>
          ) : null}
        </div>
        <div>
          {this.state.showExperienceInputOrDisplay ? (
            <form onSubmit={this.handleExperienceSubmit}>
              <Experience onExperience={this.experienceLog} />
            </form>
          ) : null}
          {!this.state.showExperienceInputOrDisplay ? (
            <div className="experienceDisplay">
              <p>{this.state.experience.name}</p>
              <p>{this.state.experience.title}</p>
              <p>{this.state.experience.task}</p>
              <p>
                {this.state.experience.year}-{this.state.experience.year2}
              </p>
              <button onClick={this.handleExperienceEdit}>Edit</button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
