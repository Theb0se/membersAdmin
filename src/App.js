import Navbar from "./components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings/Settings";
import Account from "./Pages/Account/Account";
import Users from "./Pages/Users/Users";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payments/Payment";
import Support from "./Pages/Support/Support";

function App() {
  const [barLoading, setbarLoading] = useState(false);

  return (
    <ChakraProvider>
      <div className="app">
        <Topbar barLoading={barLoading} setbarLoading={setbarLoading} />
        <Navbar setbarLoading={setbarLoading} />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/setting" element={<Settings />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route
            path="/users"
            element={<Users setbarLoading={setbarLoading} />}
          ></Route>
          <Route
            path="/orders"
            element={<Orders setbarLoading={setbarLoading} />}
          ></Route>
          <Route
            path="/payments"
            element={<Payment setbarLoading={setbarLoading} />}
          ></Route>
          <Route
            path="/support"
            element={<Support setbarLoading={setbarLoading} />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
