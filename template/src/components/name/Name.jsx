import React from "react";
import { useRBLState } from "redux-by-levels";

import classes from "./Name.module.css";

const Name = () => {
  const [name, setName] = useRBLState();
  return (
    <input
      className={classes.input}
      defaultValue={name}
      placeholder="Enter Something..."
      onChange={({ target: { value } }) => setName(value)}
    />
  );
};

export default Name;
