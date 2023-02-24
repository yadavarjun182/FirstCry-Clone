import React from "react";
import {Routes,Route} from 'react-router-dom';


import { AccoutDetails } from "../pages/AccountDetails/AccoutDetails";

export const AllRouts = () => {


    return(
        <Routes>
            <Route path="/accountdetails" element={AccoutDetails} ></Route>
        </Routes>
    )
}
