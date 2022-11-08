import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Search from "./Search";
import Person from "./Person";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search/>} />
      <Route path="person/:personId" element={<Person/>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
