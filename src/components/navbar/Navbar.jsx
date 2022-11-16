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
import "./Navbar.css";

function Navbar(props) {
  const loactaion = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const path = loactaion.pathname;
  const pathName = path.replace("/", "");

  const logout = () => {
    props.setbarLoading(true);

    setTimeout(() => {
      props.setbarLoading(false);
    }, 2500);
  };

  return (
    <div className="navbar">
      <div className="lft">
        <div className="ham">
          <HamburgerIcon
            color={"#fff"}
            h="7"
            w={7}
            onClick={onOpen}
            ref={btnRef}
          />
          <Link to="/" onClick={onClose}>
            <h5>{pathName === "" ? "Dashboard" : pathName}</h5>
          </Link>
        </div>
      </div>
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
            icon={<Avatar w={8} h={8} name="Rishabh Bose" />}
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

                <Link to="/users" onClick={onClose}>
                  <li>Users</li>
                </Link>
                <Link to="/orders" onClick={onClose}>
                  <li>Orders</li>
                </Link>
                <Link to="/services" onClick={onClose}>
                  <li>Services</li>
                </Link>

                <Link to="/payments" onClick={onClose}>
                  <li>Payments</li>
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
              <p>Balence In API</p>
              <p className="blnc">5433 ₹</p>
            </div>
            <div className="totalOrders">
              <div className="icon">
                <p className="icon">
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                </p>
                <p>Total Orders</p>
                <p className="ttlor">555</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navbar;
