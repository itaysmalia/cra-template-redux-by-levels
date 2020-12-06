import React from "react";
import { useRBLState } from "redux-by-levels";

import classes from "./Count.module.css";

const Count = () => {
  const [count, setCount] = useRBLState();
  return (
    <button className={classes.button} onClick={() => setCount(count + 1)}>
      count - {count}
    </button>
  );
};

export default Count;
