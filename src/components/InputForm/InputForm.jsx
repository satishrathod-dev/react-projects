import React, { useState } from "react";
import "./Inputform.css";

const InputForm = () => {
  const [input, setInput] = useState({ firstName: "", lanstName: "" });
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    setData((e) => e.target.value);
    console.log(data);
    alert("Btn clicked");
  };

  const handleChange = (e) => {
    setInput((input) => e.target.value);
    console.log(input);
  };

  return (
    <>
      <form>
        <label>FirstName:</label>
        <input type="text" onChange={handleChange} />
        <label>LastName:</label>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default InputForm;
