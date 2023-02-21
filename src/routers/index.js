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
import Home from "src/pages/home";
import MovieDetail from "src/pages/movieDetail";
import Order from "src/pages/OrderPage";
import AdminPage from "src/pages/AdminPage";

import Payment from "src/pages/payment";
import TicketResult from "src/pages/ticketResult";
import Profile from "src/pages/profile";

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
        <Route path="/" element={<Home />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin-page" element={<AdminPage />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/ticketResult/:id" element={<TicketResult />} />

        <Route path="/profile/:id" element={<Profile />} />


        {/* <Route path="404" element={<InvalidRoute />} />
          <Route path="*" exact element={<Navigate to="404" />} /> */}
      </Routes>
    </Router>
    // </Provider>
  );
};

export default App;
