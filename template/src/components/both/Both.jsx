import React from "react";
import { useRBLValue } from "redux-by-leves";

const Both = () => {
  const { name, count } = useRBLValue();
  return (
    <div>
      <h1>{name.repeat(count)}</h1>
    </div>
  );
};

export default Both;
