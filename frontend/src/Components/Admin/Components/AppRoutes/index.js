import { Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers/index";
import Dashboard from "../../Pages/Dashbaord/index";
import Inventory from "../../Pages/Inventory/index";
import Orders from "../../Pages/Orders/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/adminInventory" element={<Inventory />}></Route>
      <Route path="/adminOrders" element={<Orders />}></Route>
      <Route path="/adminCustomers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
