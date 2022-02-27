import React from "react";
import ReactDOM from "react-dom";
import Testpage from "./Testpage";
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Testpage />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
