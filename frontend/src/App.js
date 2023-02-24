
import './App.css';
// import AdminRegister from "./Components/Admin/AdminRegister";
// import { ChakraProvider } from "@chakra-ui/react";
// import AdminLogin from "./Components/Admin/AdminLogin";
import {Register} from './pages/Authantication/signup'
import { Login } from './pages/Authantication/Login';
import FooterPage from "./pages/FooterPage";
import { Cart } from './pages/Cart';

import ProductsPage from "./pages/ProductsA/ProductsPage";

import { AccoutDetails } from './pages/AccountDetails/AccoutDetails'

function App() {

  
  return (
    <div>
      <Cart/>
    </div>
  );
}

export default App;
