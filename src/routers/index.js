import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom";

import UserLogin from "src/pages/UserLogin";
import UserRegist from "src/pages/UserRegist";
import UserReset from "src/pages/UserReset";

import InvalidRoute from "src/pages/InvalidRoute";
// import { Provider } from "react-redux";
// import configureStore from "../redux/store";

const App = () => {
  //   const { store } = configureStore();
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        {/* <Route index element={<Landing />} /> */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-regist" element={<UserRegist />} />
        <Route path="/user-reset" element={<UserReset />} />

        {/* <Route path="404" element={<InvalidRoute />} />
          <Route path="*" exact element={<Navigate to="404" />} /> */}
      </Routes>
    </Router>
    // </Provider>
  );
};

export default App;
