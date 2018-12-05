import React from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import store from "./store";

import RepositoryList from "./components/RepositoryList";

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
