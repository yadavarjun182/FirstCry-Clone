
import "./App.css";
// import Home from "./pages/home";

import './App.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";

import { Cart } from './pages/Cart';
import {Register} from './pages/Authantication/signup';
import {Login} from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";

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
