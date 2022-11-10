import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const data = createContext();

function DataContext({ children }) {
  const [user, setuser] = useState();
  const [isLogin, setisLogin] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setuser(user);
    console.log(user);

  }, [isLogin]);

  return (
    <data.Provider value={{ user, setuser, isLogin, setisLogin }}>
      {children}
    </data.Provider>
  );
}

export default DataContext;

export const DataState = () => {
  return useContext(data);
};
