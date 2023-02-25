



// import Home from "./pages/home";
import './App.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import { Cart } from './pages/Cart';
import {Register} from './pages/Authantication/signup';
import {Login} from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";
import AdminRegister from "./Components/Admin/AdminRegister";
import AdminLogin from "./Components/Admin/AdminLogin";

function App() {


  return (

    <div>
  
        <ProductsPage />
        <FooterPage />
      </div>

    </div>
  );
}

export default App;
