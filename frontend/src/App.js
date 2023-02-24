
import "./App.css";
import Home from "./pages/home";

import './App.css';
import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";


import { Cart } from './pages/Cart';
import ProductsPage from "./pages/ProductsA/ProductsPage";

function App() {

  
  return (

    <div>
      <Home />


      <div>
      <Navbar/>
      <ProductsPage />
      <FooterPage />

    </div>
  );
}

export default App;
