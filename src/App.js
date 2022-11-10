import Navbar from "./components/navbar/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import { DataState } from "./Context/DataContext";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [barLoading, setbarLoading] = useState(false);
  const { user } = DataState();
  console.log(user);

  return (
    <ChakraProvider>
      <div className="app">
        <Topbar barLoading={barLoading} setbarLoading={setbarLoading} />
        <Navbar setbarLoading={setbarLoading} />
        <Dashboard />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
