import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
  Button,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataState } from "../../Context/DataContext";
import "./users.css";

function Users(props) {
  const {
    isOpen: isUserOpen,
    onOpen: onUserOpen,
    onClose: onUserClose,
  } = useDisclosure();
  const {
    isOpen: isPassOpen,
    onOpen: onPassOpen,
    onClose: onPassClose,
  } = useDisclosure();
  const {
    isOpen: isDiscountOpen,
    onOpen: onDiscountOpen,
    onClose: onDiscountClose,
  } = useDisclosure();

  const [Username, setUsername] = useState();
  const [Id, setId] = useState();
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [Discount, setDiscount] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [ispassLoading, setispassLoading] = useState(false);
  const [isUserloading, setisUserloading] = useState(false);
  const [isDiscountLoading, setisDiscountLoading] = useState(false);
  const [Users, setUsers] = useState();
  const { Orders } = DataState();

  const editPassword = () => {
    setispassLoading(true);
    props.setbarLoading(true);

    const data = { userId: Id, Password: password };

    axios
      .post("https://memberstocksserver.onrender.com/user/ChangePassword", data)
      .then(function (response) {
        setispassLoading(false);
        props.setbarLoading(false);
        onPassClose();
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setispassLoading(false);
        props.setbarLoading(false);
      });
  };
  const editUser = () => {
    setisUserloading(true);
    props.setbarLoading(true);

    const data = {
      userId: Id,
      name: Username,
      email: Email,
    };

    axios
      .post("https://memberstocksserver.onrender.com/user/updateUser", data)
      .then(function (response) {
        setisUserloading(false);
        props.setbarLoading(false);
        setUsers(response.data);
        onUserClose();
      })
      .catch(function (error) {
        console.log(error);
        setisUserloading(false);
        props.setbarLoading(false);
      });
  };
  const setDisc = () => {
    setisDiscountLoading(true);
    props.setbarLoading(true);

    setTimeout(() => {
      setisDiscountLoading(false);
      props.setbarLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setisLoading(true);

    axios
      .get("https://memberstocksserver.onrender.com/user/allUsers", {})
      .then(function (response) {
        const data = response.data;
        const rva = [...data].reverse();
        setUsers(rva);
        setisLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setisLoading(false);
      });
  }, []);

  const date = function (date) {
    var d = new Date(date);
    return d.toLocaleString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };
  const time = function (date) {
    const d = new Date(date).toLocaleTimeString();
    return d;
  };

  const spendings = (email) => {
    const filtrOrd = Orders?.filter((o) => o.ordermain.email === email);
    const compleat = filtrOrd?.filter((f) => f.status !== "Canceled");
    const qt = [];
    for (let i = 0; i < compleat?.length; i++) {
      const qnt = compleat[i]?.ordermain?.quantity;
      const qntNum = parseFloat(qnt);

      qt.push(qntNum);
    }

    let sum = qt.reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum;
  };

  return (
    <div className="users">
      <div className="table">
        <TableContainer>
          <Table size="md" color={"#fff"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Status</Th>
                <Th>Created</Th>
                <Th textAlign={"center"}>Amt Spent</Th>
                <Th textAlign={"center"}>Amt In Panel</Th>
                <Th textAlign={"center"}>Set Discount</Th>
                <Th textAlign={"center"}>Action</Th>
              </Tr>
            </Thead>
            {isLoading ? (
              <Spinner />
            ) : (
              <Tbody>
                {Users?.map((d, index) => (
                  <Tr>
                    <Td>{Users.length - index}</Td>
                    <Td>{d.name}</Td>
                    <Td>{d.email}</Td>
                    <Td textAlign={"center"}>not set</Td>
                    <Td>
                      {date(d.createdAt)} <br /> {time(d.createdAt)}
                    </Td>
                    <Td textAlign={"center"}>{spendings(d.email) * 0.13} ₹</Td>
                    <Td textAlign={"center"}>{d.balence} ₹</Td>
                    <Td textAlign={"center"}>
                      <button
                        className="setd"
                        onClick={() => {
                          setId(d._id);
                          setUsername(d.name);
                          setEmail(d.email);
                          onDiscountOpen();
                        }}
                      >
                        Set Descount
                      </button>
                    </Td>
                    <Td textAlign={"center"}>
                      <Menu>
                        <MenuButton
                          onClick={() => {
                            setId(d._id);
                            setUsername(d.name);
                            setEmail(d.email);
                          }}
                        >
                          Actions <ChevronDownIcon />
                        </MenuButton>
                        <MenuList bg={"#373539"}>
                          <div className="editUser">
                            <p onClick={onUserOpen}>Edit User</p>
                          </div>
                          <div className="editPass">
                            <p onClick={onPassOpen}>Set Password</p>
                          </div>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </div>

      {/* user edit model */}
      <Modal isOpen={isUserOpen} onClose={onUserClose} size={"sm"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color={"#fff"}>
          <ModalHeader fontWeight={400} fontSize={"16px"}>
            Edit User ( ID : {Id} )
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={300} fontSize={"14px"}>
                Username
              </FormLabel>
              <Input
                type="email"
                size={"sm"}
                value={Username}
                color={"#FFF"}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <br />
              <FormLabel fontWeight={300} fontSize={"14px"}>
                Email
              </FormLabel>
              <Input
                type="email"
                size={"sm"}
                color={"#FFF"}
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"#ff8355"}
              _hover
              size={"sm"}
              fontWeight={"400"}
              onClick={editUser}
              isLoading={isUserloading}
            >
              Save Changes
            </Button>
            <Button
              colorScheme="gray"
              size={"sm"}
              ml={5}
              color={"#373539"}
              onClick={onUserClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* password Chnage model */}
      <Modal isOpen={isPassOpen} onClose={onPassClose} size={"sm"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color={"#fff"}>
          <ModalHeader fontWeight={400} fontSize={"16px"}>
            Set Password ( ID : {Id} )
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={300} fontSize={"14px"}>
                Username
              </FormLabel>
              <Input
                type="email"
                size={"sm"}
                disabled
                value={Username}
                color={"#FFF"}
              />
              <br />
              <br />
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Password
              </FormLabel>
              <Input
                type="text"
                size={"sm"}
                color={"#FFF"}
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"#ff8355"}
              _hover
              size={"sm"}
              fontWeight={"300"}
              onClick={editPassword}
              isLoading={ispassLoading}
            >
              Set Password
            </Button>
            <Button
              colorScheme="gray"
              size={"sm"}
              ml={5}
              color={"#373539"}
              onClick={onPassClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Descount Model */}
      <Modal
        isOpen={isDiscountOpen}
        onClose={onDiscountClose}
        size={"sm"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg={"#373539"} color={"#fff"}>
          <ModalHeader fontWeight={400} fontSize={"16px"}>
            Set Discount ( ID : {Id} )
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Discount ( In ₹ )
              </FormLabel>
              <Input
                type="number"
                max="100"
                min="0"
                size={"sm"}
                color={"#FFF"}
                value={Discount}
                onChange={(e) => {
                  let { value, min, max } = e.target;
                  value = Math.max(
                    Number(min),
                    Math.min(Number(max), Number(value))
                  );

                  setDiscount(value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"#ff8355"}
              _hover
              size={"sm"}
              fontWeight={"300"}
              onClick={setDisc}
              isLoading={isDiscountLoading}
            >
              Set Discount
            </Button>
            <Button
              colorScheme="gray"
              size={"sm"}
              ml={5}
              color={"#373539"}
              onClick={onDiscountClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Users;
