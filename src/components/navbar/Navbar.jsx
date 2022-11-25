import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataState } from "../../Context/DataContext";
import "./Navbar.css";

function Navbar(props) {
  const loactaion = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const path = loactaion.pathname;
  const pathName = path.replace("/", "");
  const { ApiBalence, Orders, admin } = DataState();
  const { setisLogin, isLogin } = DataState();

  const logout = () => {
    props.setbarLoading(true);
    setTimeout(() => {
      setisLogin(isLogin ? false : true);
      props.setbarLoading(false);
      sessionStorage.removeItem("admin");
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="navbar">
      <div className="lft">
        <div className="ham">
          {admin && (
            <HamburgerIcon
              color={"#fff"}
              h="7"
              w={7}
              onClick={onOpen}
              ref={btnRef}
            />
          )}
          <Link to="/" onClick={onClose}>
            {admin ? (
              <h5>{pathName === "" ? "Dashboard" : pathName}</h5>
            ) : (
              <h6>Log In</h6>
            )}
          </Link>
        </div>
      </div>
      {admin && (
        <div className="rgt">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BellIcon h={10} w={8} color="#fff" />}
              variant="ghost"
              colorScheme="#000"
            />
            <MenuList>
              <MenuItem>No Notification</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Avatar w={8} h={8} name={admin?.name} />}
              variant="ghost"
              colorScheme="#000"
            />
            <MenuList>
              <Link to="/account">
                <MenuItem>Profile</MenuItem>
              </Link>

              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}

      {admin && (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#000"}>
            <DrawerCloseButton color={"#FFF"} />
            <DrawerHeader color={"#fff"} fontWeight={"400"}>
              Member Stocks
            </DrawerHeader>

            <DrawerBody>
              <div className="links">
                <ul>
                  <Link to="/" onClick={onClose}>
                    <li>Dashboard</li>
                  </Link>

                  <Link to="/orders" onClick={onClose}>
                    <li>Orders</li>
                  </Link>

                  <Link to="/payments" onClick={onClose}>
                    <li>Payments</li>
                  </Link>

                  <Link to="/users" onClick={onClose}>
                    <li>Users</li>
                  </Link>

                  <Link to="/support" onClick={onClose}>
                    <li>Support</li>
                  </Link>

                  <Link to={"/setting"} onClick={onClose}>
                    <li>Settings</li>{" "}
                  </Link>
                </ul>
              </div>

              <div className="apiBlnc">
                <p>Api Balance</p>
                <p className="blnc">{ApiBalence && ApiBalence} ₹</p>
              </div>
              <div className="totalOrders">
                <p>Total Orders</p>
                <p className="ttlor">{Orders?.length}</p>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
