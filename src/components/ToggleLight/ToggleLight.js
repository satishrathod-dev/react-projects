import React, { useState } from "react";
import "./style.css";

function ToggleLight() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    console.log("Btn toggled");
  };

  return (
    <div>
      <div
        style={{ backgroundColor: toggle ? "white" : "gray", height: "500px" }}
      >
        <button onClick={handleClick}>
          {toggle ? "Light Off" : "Light On"}
        </button>

        {/* <p>{toggle ? "Light On" : "Light Off"}</p> */}
      </div>
    </div>
  );
}

export default ToggleLight;
