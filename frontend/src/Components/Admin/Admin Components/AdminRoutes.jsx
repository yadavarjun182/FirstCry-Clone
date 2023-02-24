import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import AdminsList from "../Admin Dashboard/AdminsList";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<AdminsList />}></Route>
    </Routes>
  );
}
export default AdminRoutes;
