import React from "react";

const Count = () => {
  const [count, setCount] = useRBLState();
  return <button onClick={() => setCount(count + 1)}>count - {count}</button>;
};

export default Count;
