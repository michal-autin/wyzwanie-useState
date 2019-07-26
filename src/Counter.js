import React, { useState, useEffect } from "react";

export default function Counter() {
  // TODO dodać stan lokalny z wykorzystaniem useStAte
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(s => s + 1);
  };
  const decrease = () => {
    setValue(s => s - 1);
  };

  return (
    <div>
      <p>Wartość licznika: {value}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
