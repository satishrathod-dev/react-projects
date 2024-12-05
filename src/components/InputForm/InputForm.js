import React, { useState } from "react";
import "./inputform.css";

function InputForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    alert("Btn clicked");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    // setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <label>First Name</label>
      <input type="text" value={input.firstName} onChange={handleChange} />
      <p>Your entered: {input}</p>
      {/* {input.firstName} */}
      {/* {input.firstName} */}
      {/* <label>Last Name</label>
      <input type="text" onChange={handleChange} /> */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;
