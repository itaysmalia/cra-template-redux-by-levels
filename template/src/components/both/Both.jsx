import React from "react";
import { useRBLValue } from "redux-by-levels";

import classes from "./Both.module.css";

const Both = () => {
  const { name, count } = useRBLValue();
  return (
    <div className={classes.result}>
      <h3>{name.repeat(count)}</h3>
    </div>
  );
};

export default Both;
