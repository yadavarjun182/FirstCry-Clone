import React from "react";

import AdminRegister from "../Components/Admin/AdminRegister";

import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";


import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";
import { Login } from "../pages/Authantication/Login";
import { Register } from "../pages/Authantication/signup";
import { Cart } from "../pages/Cart";
import ProductsPage from "../pages/ProductsA/ProductsPage";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import Customers from "../Components/Admin/Pages/Customers/index";
import Dashboard from "../Components/Admin/Pages/Dashbaord/index";
import Inventory from "../Components/Admin/Pages/Inventory/index";
import Orders from "../Components/Admin/Pages/Orders/index";
import Home from "../pages/home";
import {Payment} from '../PaymentPage'



export const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/accountdetails" element={AccoutDetails}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminregister" element={<AdminRegister />}></Route>
      <Route path="/admindashboard" element={<AdminDashboard />}></Route>
      <Route path="/admins" element={<Dashboard />}></Route>
      <Route path="/adminInventory" element={<Inventory />}></Route>
      <Route path="/adminOrders" element={<Orders />}></Route>
      <Route path="/adminCustomers" element={<Customers />}></Route>
       {/* <Route path="/payment" element={<Payment />}></Route>  */}
    </Routes>
  );
};
