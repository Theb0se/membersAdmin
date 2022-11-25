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
import Login from "./Pages/Login/Login";
import { DataState } from "./Context/DataContext";

function App() {
  const [barLoading, setbarLoading] = useState(false);
  const { admin } = DataState();

  return (
    <ChakraProvider>
      <div className="app">
        <Topbar barLoading={barLoading} setbarLoading={setbarLoading} />
        <Navbar setbarLoading={setbarLoading} />
        <Routes>
          {/* <Route
            path="/login"
            element={
              admin ? <Dashboard /> : <Login setbarLoading={setbarLoading} />
            }
          ></Route> */}
          <Route
            path="/"
            element={
              admin ? <Dashboard /> : <Login setbarLoading={setbarLoading} />
            }
          ></Route>
          <Route
            path="/setting"
            element={
              admin ? <Settings /> : <Login setbarLoading={setbarLoading} />
            }
          ></Route>
          <Route
            path="/account"
            element={
              admin ? <Account /> : <Login setbarLoading={setbarLoading} />
            }
          ></Route>
          <Route
            path="/users"
            element={
              admin ? (
                <Users setbarLoading={setbarLoading} />
              ) : (
                <Login setbarLoading={setbarLoading} />
              )
            }
          ></Route>
          <Route
            path="/orders"
            element={
              admin ? (
                <Orders setbarLoading={setbarLoading} />
              ) : (
                <Login setbarLoading={setbarLoading} />
              )
            }
          ></Route>
          <Route
            path="/payments"
            element={
              admin ? (
                <Payment setbarLoading={setbarLoading} />
              ) : (
                <Login setbarLoading={setbarLoading} />
              )
            }
          ></Route>
          <Route
            path="/support"
            element={
              admin ? (
                <Support setbarLoading={setbarLoading} />
              ) : (
                <Login setbarLoading={setbarLoading} />
              )
            }
          ></Route>
        </Routes>

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
