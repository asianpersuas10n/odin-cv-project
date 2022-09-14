import React, { Component } from "react";
import General from "./components/General";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.nameLog = this.nameLog.bind(this);
  }
  nameLog = (val) => {
    this.setState({ name: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleEdit = () => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <General onGeneral={this.nameLog} />
          <input type="submit" value="Submit" />
        </form>
        <div className="display">
          <p>{this.state.name}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      </div>
    );
  }
}

export default App;
