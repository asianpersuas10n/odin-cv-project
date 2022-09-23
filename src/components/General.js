import React, { useState } from "react";

function General({ generalLog }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <p>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => nameChange(e)}
          value={name}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => emailChange(e)}
          value={email}
        />
      </p>
      <p>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          onChange={(e) => phoneChange(e)}
          value={phone}
        />
      </p>
      <p>
        <input
          type="submit"
          value="Submit"
          onClick={() => generalLog(name, email, phone)}
        />
      </p>
    </div>
  );
}

export default General;
