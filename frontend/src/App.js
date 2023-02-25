



// import Home from "./pages/home";
import './App.css';
// import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import { Cart } from './pages/Cart';
import {Register} from './pages/Authantication/signup';
import {Login} from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";
import {Productform} from './pages/ProductsA/product.Admin'

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
