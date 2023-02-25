import './App.css';
import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import { Cart } from './pages/Cart';
import {Register} from './pages/Authantication/signup';
import {Login} from './pages/Authantication/Login'
import ProductsPage from "./pages/ProductsA/ProductsPage";

function App() {

  
  return (
     <div>
     {/* <Register/>
     <Login/>
     <Cart/> */}
     <Navbar/>
     <ProductsPage/>
     <FooterPage/>
     </div>
  );
}

export default App;
