import React from "react";
import { createRoot } from "react-dom/client";
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

const root = createRoot(document.getElementById("root"));
root.render(<Router />);
