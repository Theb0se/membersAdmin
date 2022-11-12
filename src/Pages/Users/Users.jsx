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
} from "@chakra-ui/react";
import React, { useState } from "react";
import data from "../../Data/Data";
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

  const [Username, setUsername] = useState();
  const [Id, setId] = useState();
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [ispassLoading, setispassLoading] = useState(false);
  const [isUserloading, setisUserloading] = useState(false);

  const sum = (array) => {
    const ourArray = array;
    let sum = 0;

    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }

    return sum;
  };

  const editPassword = () => {
    setispassLoading(true);
    props.setbarLoading(true);

    setTimeout(() => {
      setispassLoading(false);
      props.setbarLoading(false);
    }, 3000);
  };
  const editUser = () => {
    setisUserloading(true);
    props.setbarLoading(true);

    setTimeout(() => {
      setisUserloading(false);
      props.setbarLoading(false);
    }, 3000);
  };

  return (
    <div className="users">
      <div className="table">
        <TableContainer>
          <Table size="sm" color={"#fff"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Status</Th>
                <Th>Created At</Th>
                <Th>Amount Spent</Th>
                <Th>Amount In Panel</Th>
                <Th>Set Discount</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((d) => (
                <Tr>
                  <Td>{d.Id}</Td>
                  <Td>{d.username}</Td>
                  <Td>{d.email}</Td>
                  <Td>{d.status}</Td>
                  <Td>{d.created}</Td>
                  <Td textAlign={"center"}>{sum(d.spent)}</Td>
                  <Td textAlign={"center"}>{d.balance}</Td>
                  <Td>Active</Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        onClick={() => {
                          setId(d.Id);
                          setUsername(d.username);
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
    </div>
  );
}

export default Users;
