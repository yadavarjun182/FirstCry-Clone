import React from "react";
import { Routes, Route } from "react-router-dom";
import  AdminLogin  from "../components/Admin/AdminLogin";
import  AdminRegister from "../components/Admin/AdminRegister";
import 'react-toastify/dist/ReactToastify.css';
import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";
import ProductsPage from "../pages/ProductsA/ProductsPage";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Customers from "../components/Admin/Components/PageContent/index";
import Dashboard from "../components/Admin/Pages/Dashbaord/index";
import Inventory from "../components/Admin/Pages/Inventory/index";
import Orders from "../components/Admin/Pages/Orders/index";


export const AllRouts = () => {
  return (
    <Routes>
      {/* <Route path="/" element={< />}></Route> */}
      <Route path="/accountdetails" element={AccoutDetails}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminregister" element={<AdminRegister />}></Route>
      <Route path="/admindashboard" element={<AdminDashboard />}></Route>
      <Route path="/admins" element={<Dashboard />}></Route>
      <Route path="/adminInventory" element={<Inventory />}></Route>
      <Route path="/adminOrders" element={<Orders />}></Route>
      <Route path="/adminCustomers" element={<Customers />}></Route>
    </Routes>
  );
};
