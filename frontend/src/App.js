
// import Home from "./pages/home";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";


import { Register } from './pages/Authantication/signup';
import { Login } from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";
import AdminLogin from "../src/Components/Admin/AdminLogin"
import AdminDashboard from "./Components/Admin/AdminDashboard"
import { Cart } from "./pages/Cart";


import AdminRegister from "./Components/Admin/AdminRegister";


import SideMenu from "./Components/Admin/Components/SideMenu/index";
import PageContent from "./Components/Admin/Components/PageContent/index";
import AppHeader from './Components/Admin/Components/AppHeader';
import { AllRouts } from "./V_AllRouts/Allrouts";
import { ToastContainer } from "react-toastify";
import Navbar from "../src/Components/Navbar"

function App() {
  return (

    <div>
      <Navbar />
      <AllRouts />
    </div>
  );
}

export default App;
