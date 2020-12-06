import React from "react";
import { useRBLValue } from "redux-by-levels";

const Both = () => {
  const { name, count } = useRBLValue();
  return (
    <div>
      <h1>{name.repeat(count)}</h1>
    </div>
  );
};

export default Both;
