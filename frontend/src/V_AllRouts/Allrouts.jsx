import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminRegister from "../Components/Admin/AdminRegister";

import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsA/ProductsPage";

export const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/accountdetails" element={AccoutDetails}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}>
        {" "}
      </Route>
      <Route path="/adminregister" element={<AdminRegister />}>
        {" "}
      </Route>
    </Routes>
  );
};
