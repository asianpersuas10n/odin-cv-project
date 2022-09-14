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

  nameChange = (e) => {
    this.props.onGeneral(e.target.value);
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
          <input type="text" id="name" onChange={this.nameChange} />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.emailChange} />
        </p>
        <p>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" onChange={this.phoneChange} />
        </p>
      </div>
    );
  }
}

export default General;
