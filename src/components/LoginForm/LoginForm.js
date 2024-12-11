import React, { useState } from "react";
import "./login.css";
import validationUtility from "./ValidationUtility";

function LoginForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validationUtility(input);
    setErrors(newErrors);
    console.error(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfuly");
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      console.log(input);
    } else {
      console.log("Error", errors);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Login Form</h2>
        <form>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="field-error">{errors.firstName}</span>
          )}
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="field-error">{errors.lastName}</span>
          )}
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
