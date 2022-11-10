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
import "./Navbar.css";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
          <h5>Dashboard</h5>
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
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
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
                <li>
                  <span>
                    <i class="fa-solid fa-table-columns"></i>
                  </span>{" "}
                  Dashboard
                </li>
                <li>
                  <span>
                    <i class="fa-light fa-list"></i>
                  </span>{" "}
                  Services
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-clipboard"></i>
                  </span>{" "}
                  Orders
                </li>
                <li>
                  <span>
                    <i class="fa-regular fa-shuffle"></i>
                  </span>{" "}
                  Payments
                </li>
                <li>
                  <span>
                    <i class="fa-regular fa-clipboard-user"></i>
                  </span>{" "}
                  Tickets
                </li>
                <li>
                  <span>
                    <i class="fa-regular fa-users"></i>
                  </span>{" "}
                  Users
                </li>
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
