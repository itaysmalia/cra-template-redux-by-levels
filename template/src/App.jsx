import React from "react";
import { Provider } from "react-redux";
import { RBLProvider } from "redux-by-levels";

import store from "./store/store";
import Count from "./components/count/Count";
import Name from "./components/name/Name";
import Both from "./components/both/Both";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <h1>Redux By Levels cra tamplate</h1>
      <h4 className={classes.instructions}>(click the button)</h4>
      <Provider store={store}>
        <RBLProvider level="count">
          <Count />
        </RBLProvider>
        <RBLProvider level="name">
          <Name />
        </RBLProvider>
        <Both />
      </Provider>
    </div>
  );
};

export default App;
