import React, { useState } from "react";
import "./Account.css";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { DataState } from "../../Context/DataContext";
import axios from "axios";

function Account() {
  const { admin, isLogin, setisLogin, setadmin } = DataState();
  const [newusername, setnewusername] = useState();
  const [password, setpassword] = useState();
  const [nameLoading, setnameLoading] = useState(false);

  const [newPassword, setnewPassword] = useState();
  const [cnfPass, setcnfPass] = useState();
  const [passLoading, setpassLoading] = useState(false);

  const updateUsername = () => {
    const data = {
      username: admin.username,
      newusername: newusername,
      password: password,
    };

    if (!newusername || !password) {
      alert("Please Fill All The Feilds");
    } else {
      setnameLoading(true);
      axios
        .post("https://memberstocksserver.onrender.com/admin/updateAdminUserName", data)
        .then(function (response) {
          const data = response.data;
          setadmin(data);
          setnameLoading(false);
          console.log(data);
          const admin = JSON.stringify(data);
          sessionStorage.setItem("admin", admin);
          setisLogin(isLogin ? false : true);
          setnewusername("");
          setpassword("");
        })
        .catch(function (error) {
          console.log(error);
          alert(error.response.data);
          setnameLoading(false);
        });
    }
  };

  const setPass = () => {
    const data = {
      username: admin.username,
      password: password,
      newPassword: newPassword,
    };
    if (!password || !newPassword || !cnfPass) {
      alert("Please Fill All The  Fields");
    } else if (newPassword !== cnfPass) {
      alert("Password Does Not Match");
    } else {
      setpassLoading(true);
      axios
        .post("https://memberstocksserver.onrender.com/admin/updatePass", data)
        .then(function (response) {
          const data = response.data;
          setpassLoading(false);
          setcnfPass("");
          setnewPassword("");
          setpassword("");
          alert(data);
        })
        .catch(function (error) {
          console.log(error);
          alert(error.response.data);
          setpassLoading(false);
        });
    }
  };

  return (
    <div className="account">
      <div className="email">
        <div className="card">
          <FormControl>
            <FormLabel>Current User Name</FormLabel>
            <Input type="text" value={admin.username} isDisabled />
            <br />
            <br />
            <FormLabel>New User Id</FormLabel>
            <Input
              type="text"
              required
              value={newusername}
              onChange={(e) => {
                setnewusername(e.target.value);
              }}
            />
            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <div className="bttn">
              <Button onClick={updateUsername}>
                {nameLoading ? <Spinner /> : "Change Username"}
              </Button>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="password">
        <div className="card">
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <br />
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              required
              value={newPassword}
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="text"
              value={cnfPass}
              onChange={(e) => {
                setcnfPass(e.target.value);
              }}
            />
            <div className="bttn">
              <Button onClick={setPass}>
                {passLoading ? <Spinner /> : "Change Password"}
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Account;
