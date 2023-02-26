
import FooterPage from "./pages/FooterPage";

import { Cart } from "./pages/Cart";
import { Register } from "./pages/Authantication/signup";
import { Login } from "./pages/Authantication/Login";
import ProductsPage from "./pages/ProductsA/ProductsPage";
import SideMenu from "./components/Admin/Components/SideMenu/index";
import PageContent from "./components/Admin/Components/PageContent/index";
import AppHeader from './components/Admin/Components/AppHeader';
import AdminDashboard from './components/Admin/AdminDashboard';

import { AllRouts } from "./V_AllRouts/Allrouts";
import Navbar from "../src/Components/Navbar"
import { AllRouts } from "./V_AllRouts/Allrouts";
import FooterPage from "./pages/FooterPage";

function App() {
  return (
    <div>
      <Navbar />
      <AllRouts />
    </div>

  );
}

export default App;
