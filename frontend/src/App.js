import './App.css';
import Navbar from './components/Navbar';
import FooterPage from "./pages/FooterPage";
import ProductsPage from "./pages/ProductsA/ProductsPage";

function App() {
  return (
      <div>
          <Navbar/>
      <ProductsPage />
      <FooterPage />

    </div>
  );
}

export default App;
