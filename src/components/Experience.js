import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      task: "",
      time: "",
      time2: "",
    };
  }
  log = () => {
    const experienceState = this.state;
    this.props.onExperience(
      experienceState.name,
      experienceState.title,
      experienceState.task,
      experienceState.time,
      experienceState.time2
    );
  };

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  titleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  taskChange = (e) => {
    this.setState({
      task: e.target.value,
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
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            onChange={this.nameChange}
            value={this.state.name}
          />
        </p>
        <p>
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            onChange={this.titleChange}
            value={this.state.title}
          />
        </p>
        <p>
          <label htmlFor="task">Responsibilities of your Position</label>
          <input
            type="text"
            id="task"
            onChange={this.taskChange}
            value={this.state.task}
          />
        </p>
        <p>
          <p>Time of Employment</p>
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

export default Experience;
