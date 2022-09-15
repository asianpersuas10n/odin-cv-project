import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  log = () => {
    const generalState = this.state;
    this.props.onGeneral(
      generalState.name,
      generalState.email,
      generalState.phone
    );
  };

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            onChange={this.nameChange}
            value={this.state.name}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={this.emailChange}
            value={this.state.email}
          />
        </p>
        <p>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            onChange={this.phoneChange}
            value={this.state.phone}
          />
        </p>
        <p>
          <input type="submit" value="Submit" onClick={this.log} />
        </p>
      </div>
    );
  }
}

export default General;
