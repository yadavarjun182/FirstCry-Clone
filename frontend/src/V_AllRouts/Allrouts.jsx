import React from "react";
import { Routes, Route } from 'react-router-dom';
import AdminRegister from "../components/Admin/AdminRegister";


import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";

import {Login} from "../pages/Authantication/Login";
import {Register} from "../pages/Authantication/signup";
import {Cart} from "../pages/Cart";
import Home from "../pages/home";

import ProductsPage from "../pages/ProductsA/ProductsPage";

export const AllRouts = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/register" element={<AdminRegister/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path="/accountdetails" element={AccoutDetails} ></Route>
            <Route path="/products" element={<ProductsPage />} ></Route>
        </Routes>
    )
}
