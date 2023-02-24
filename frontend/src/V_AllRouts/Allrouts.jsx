import React from "react";
import { Routes, Route } from 'react-router-dom';


import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";
import ProductsPage from "../pages/ProductsA/ProductsPage";

export const AllRouts = () => {


    return (
        <Routes>
            <Route path="/accountdetails" element={AccoutDetails} ></Route>
            <Route path="/products" element={<ProductsPage />} ></Route>
        </Routes>
    )
}
