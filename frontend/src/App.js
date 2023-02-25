
// import Home from "./pages/home";
import './App.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import { Cart } from './pages/Cart';
import { Register } from './pages/Authantication/signup';
import { Login } from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";
import AdminLogin from "../src/Components/Admin/AdminLogin"
import AdminDashboard from "./Components/Admin/Admin Dashboard"
function App() {


  return (


    <div>
      {/* <AdminLogin /> */}
      <AdminDashboard/>
      {/* <ProductsPage /> */}
      {/* <FooterPage /> */}
    </div>


  );
}

export default App;
