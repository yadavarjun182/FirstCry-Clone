
// import Home from "./pages/home";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import { Cart } from "./pages/Cart";
import { Register } from "./pages/Authantication/signup";
import { Login } from "./pages/Authantication/Login";
import ProductsPage from "./pages/ProductsA/ProductsPage";

import AdminRegister from "./Components/Admin/AdminRegister";
import AdminLogin from "./Components/Admin/AdminLogin";


import SideMenu from "./Components/Admin/Components/SideMenu/index";
import PageContent from "./Components/Admin/Components/PageContent/index";
import AppHeader from './Components/Admin/Components/AppHeader';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { AllRouts } from "./V_AllRouts/Allrouts";
import { ToastContainer } from "react-toastify";


function App() {
  return (

      <div>
      <Register/>
      <Login/>
      <Cart/>
      </div>
  );
}

export default App;
