import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    bestSubject: "",
    file: "",
    choice: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Form in React</h2>
      <form>
        <label>First Name*</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        <label>Last Name*</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        <label>Email*</label>
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <label>Contact*</label>
        <input
          type="text"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter contact"
        />
        <label> Gender*</label>
        <input type="radio" />
        Male
        <input type="radio" />
        Female
        <input type="radio" />
        Other
        <label>Your best Subject*</label>
        <input type="checkbox"></input>English
        <input type="checkbox"></input>Maths
        <input type="checkbox" />
        Physics
        <label>File upload*</label>
        <input type="file" />
        <label>Select your choice*</label>
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        <label>About</label>
        <textarea />
        <label>Submit OR Reset</label>
        <button onClick={handleSubmit}>Submit</button>
        <button>Reset</button>
      </form>
    </div>
  );
}

export default Form;
