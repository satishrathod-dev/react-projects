import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => (c > 0 ? c - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={reset}>Reset</button>
      <p>You clicked {count} times</p>
      {count >= 10 && <p>You have reached 10 counts</p>}
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};

export default Counter;
