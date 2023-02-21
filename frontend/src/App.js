import './App.css';
import AdminRegister from "./Components/Admin/AdminRegister";
import { ChakraProvider } from "@chakra-ui/react";
// import AdminLogin from "./Components/Admin/AdminLogin";

function App() {
  return (
    <>
      <ChakraProvider>
        <AdminRegister />
      </ChakraProvider>
    </>
  );
}

export default App;
