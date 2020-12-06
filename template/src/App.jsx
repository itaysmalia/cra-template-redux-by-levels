import React from "react";
import { Provider } from "react-redux";
import { RBLProvider } from "redux-by-levels";

import store from './store/store'
import Count from './count'
import Name from './name'
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
