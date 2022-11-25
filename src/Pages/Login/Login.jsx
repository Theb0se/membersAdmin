import React, { useState } from "react";
import "./login.css";
import { FormControl, FormLabel, Input, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { DataState } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState();
  const { setisLogin, isLogin } = DataState();
  const navigate = useNavigate();

  const adminLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    setloading(true);
    props.setbarLoading(true);

    axios
      .post("https://memberstocksserver.onrender.com/admin/login", data)
      .then(function (response) {
        const data = response.data;
        console.log(data);
        setloading(false);
        props.setbarLoading(false);
        const admin = JSON.stringify(data);
        sessionStorage.setItem("admin", admin);
        setisLogin(isLogin ? false : true);
        navigate("/");
        window.location.reload();
      })
      .catch(function (error) {
        alert(error.response.data);
        setloading(false);
        props.setbarLoading(false);
      });
  };
  return (
    <div className="login">
      <div className="card">
        <h4>Admin Log In</h4>
        <div className="form">
          <FormControl>
            <FormLabel fontWeight={"300"}>User Name</FormLabel>
            <Input
              type="text"
              size={"sm"}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <br />
            <br />
            <FormLabel fontWeight={"300"}>Password</FormLabel>
            <Input
              type="password"
              size={"sm"}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button onClick={adminLogin}>
              {loading ? <Spinner /> : "Log In"}
            </button>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Login;
