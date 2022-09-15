import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      title: "",
      time: "",
      time2: "",
    };
  }
  log = () => {
    const educationState = this.state;
    this.props.onEducation(
      educationState.schoolName,
      educationState.title,
      educationState.time,
      educationState.time2
    );
  };

  schoolChange = (e) => {
    this.setState({ schoolName: e.target.value });
  };

  titleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  timeChange = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  time2Change = (e) => {
    this.setState({
      time2: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            id="schoolName"
            onChange={this.schoolChange}
            value={this.state.schoolName}
          />
        </p>
        <p>
          <label htmlFor="title">Title of Study</label>
          <input
            type="text"
            id="title"
            onChange={this.titleChange}
            value={this.state.title}
          />
        </p>
        <p>
          <p>Time of Study</p>
          <label htmlFor="time">From</label>
          <input
            type="date"
            id="time"
            onChange={this.timeChange}
            value={this.state.time}
          />
        </p>
        <p>
          <label htmlFor="time2">To</label>
          <input
            type="date"
            id="time2"
            onChange={this.time2Change}
            value={this.state.time2}
          />
        </p>
        <p>
          <input type="submit" value="Submit" onClick={this.log} />
        </p>
      </div>
    );
  }
}

export default Education;
