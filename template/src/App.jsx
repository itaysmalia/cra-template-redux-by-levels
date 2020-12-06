import React from "react";
import { Provider } from "react-redux";
import { RBLProvider } from "redux-by-levels";

import store from "./store/store";
import Count from "./components/count/Count";
import Name from "./components/name/Name";
import Both from "./components/both/Both";

const App = () => {
  return (
    <Provider store={store}>
      <RBLProvider level="count">
        <Count />
      </RBLProvider>
      <RBLProvider level="name">
        <Name />
      </RBLProvider>
      <Both />
    </Provider>
  );
};

export default App;
