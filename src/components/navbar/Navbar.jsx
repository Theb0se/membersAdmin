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
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
            <h5>Dashboard</h5>
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
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <div className="admin">
              <Avatar w={8} h={8} name="Rishabh Bose" />
              <div className="name">
                <p>Rishabhbose3@gmail.com</p>
                <p>Rishabh Bose</p>
              </div>
            </div>

            <div className="links">
              <ul>
                <Link to="/" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-solid fa-table-columns"></i>
                    </span>{" "}
                    Dashboard
                  </li>
                </Link>

                <Link to="/users" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-regular fa-users"></i>
                    </span>{" "}
                    Users
                  </li>
                </Link>
                <Link to="/orders" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-sharp fa-solid fa-clipboard"></i>
                    </span>{" "}
                    Orders
                  </li>
                </Link>
                <Link to="/services" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-light fa-list"></i>
                    </span>{" "}
                    Services
                  </li>
                </Link>

                <Link to="/payments" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-regular fa-shuffle"></i>
                    </span>{" "}
                    Payments
                  </li>
                </Link>

                <Link to="/tickets" onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-regular fa-clipboard-user"></i>
                    </span>{" "}
                    Tickets
                  </li>
                </Link>
                <Link to={"/setting"} onClick={onClose}>
                  <li>
                    <span>
                      <i class="fa-light fa-gear"></i>
                    </span>{" "}
                    Settings
                  </li>{" "}
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
