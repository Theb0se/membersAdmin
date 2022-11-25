import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const data = createContext();

function DataContext({ children }) {
  const [ApiBalence, setApiBalence] = useState();
  const [Orders, setOrders] = useState();
  const [Users, setUsers] = useState([]);
  const [allSupport, setallSupport] = useState([]);
  const [payments, setpayments] = useState([]);
  const [Api, setApi] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [admin, setadmin] = useState();
  const [isLogin, setisLogin] = useState();

  useEffect(() => {
    const admin = JSON.parse(sessionStorage.getItem("admin"));
    setadmin(admin);
    console.log(admin);
  }, [isLogin]);

  useEffect(() => {
    if (admin) {
      setisloading(true);
      axios
        .get("https://memberstocksserver.onrender.com/getbalence")
        .then(function (response) {
          const data = parseFloat(response.data.balance);
          const datafix = data.toFixed(2);
          setApiBalence(datafix);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get("https://memberstocksserver.onrender.com/order/getallorder", {})
        .then(function (response) {
          const data = response.data;
          setOrders(data);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get("https://memberstocksserver.onrender.com/user/allUsers", {})
        .then(function (response) {
          const data = response.data;
          const rva = [...data].reverse();
          setUsers(rva);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get("https://memberstocksserver.onrender.com/support/getallSupport")
        .then(function (response) {
          const msg = response.data;
          const revMsg = [...msg].reverse();
          setallSupport(revMsg);
          setisloading(false);
        })
        .catch(function (error) {
          const errmsg = JSON.stringify(error);
          console.log(errmsg);
          setisloading(false);
        });
      // Payments
      axios
        .get("https://memberstocksserver.onrender.com/payment/getPayments")
        .then(function (response) {
          const msg = response.data;
          const revMsg = [...msg].reverse();
          setpayments(revMsg);
          setisloading(false);
        })
        .catch(function (error) {
          const errmsg = JSON.stringify(error);
          console.log(errmsg);
          setisloading(false);
        });

      // Api
      axios
        .get("https://memberstocksserver.onrender.com/getApi")
        .then(function (response) {
          const msg = response.data;
          console.log(msg);
          setApi(msg);
        })
        .catch(function (error) {
          const errmsg = JSON.stringify(error);
          console.log(errmsg);
        });

      // get All Orders
    }
  }, [admin]);

  return (
    <data.Provider
      value={{
        admin,
        setadmin,
        setisLogin,
        ApiBalence,
        Orders,
        Users,
        allSupport,
        payments,
        isloading,
        setpayments,
        Api,
        setApi,
      }}
    >
      {children}
    </data.Provider>
  );
}

export default DataContext;

export const DataState = () => {
  return useContext(data);
};
