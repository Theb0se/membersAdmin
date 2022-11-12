import React from "react";
import "./Account.css";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Account() {
  return (
    <div className="account">
      <div className="email">
        <div className="card">
          <FormControl>
            <FormLabel>Current User Id</FormLabel>
            <Input type="text" value={"Theb0se"} isDisabled />
            <br />
            <br />
            <FormLabel>New User Id</FormLabel>
            <Input type="text" required />
            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input type="text" />
            <div className="bttn">
              <Button>Change User</Button>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="password">
        <div className="card">
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input type="text" />
            <br />
            <br />
            <FormLabel>New Password</FormLabel>
            <Input type="text" required />
            <br />
            <br />
            <FormLabel>Confirm Password</FormLabel>
            <Input type="text" />
            <div className="bttn">
              <Button>Change Password</Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Account;
