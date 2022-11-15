import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Payment.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function Payment() {
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const [AddLoading, setAddLoading] = useState(false);

  return (
    <div className="payments">
      <div className="top">
        <div className="addpayment">
          <div className="addbtn">
            <button onClick={onAddOpen}>Add Payment</button>
          </div>
          <div className="searchPayment">
            <Flex>
              <input type="text" placeholder="Search" />
              <button>
                <SearchIcon />
              </button>
            </Flex>
          </div>
        </div>
      </div>
      <div className="table">
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th textAlign={"center"}>User</Th>
                <Th>Balence</Th>
                <Th>Amount</Th>
                <Th>Method</Th>
                <Th>transection ID</Th>
                <Th>Status</Th>
                <Th textAlign={"center"}>Created</Th>
                <Th textAlign={"center"}>Updated</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr color={"#fff"}>
                <Td>1</Td>
                <Td>Theb0se</Td>
                <Td textAlign={"center"}>25.4</Td>
                <Td textAlign={"center"}>2000</Td>
                <Td textAlign={"center"}>Paytm</Td>
                <Td>Byjks85745689755</Td>
                <Td>Pending</Td>
                <Td>2022-11-14 23:22:57</Td>
                <Td>2022-11-14 23:25:32</Td>
                <Td>
                  <div className="action" onClick={onEditOpen}>
                    Action
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      <Modal isOpen={isEditOpen} onClose={onEditClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color="#fff">
          <ModalHeader>Edit Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isAddOpen} onClose={onAddClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color="#fff">
          <ModalHeader>Add Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={"300"}>Username</FormLabel>
              <Input type="email" size="sm" />
              <br /> <br />
              <FormLabel fontWeight={"300"}>Amount</FormLabel>
              <Input type="number " size="sm" />
              <br /> <br />
              <FormLabel fontWeight={"300"}>Method</FormLabel>
              <Select bg={"#373539"}>
                <option value="option1" bg={"#373539"}>
                  Free
                </option>
                <option value="option2" bg={"#373539"}>
                  Paytm
                </option>
                <option value="option2" bg={"#373539"}>
                  Phonepe
                </option>
                <option value="option2" bg={"#373539"}>
                  Gpay
                </option>
              </Select>
              <br />
              <FormLabel fontWeight={"300"}>Memo</FormLabel>
              <Input type="email" size="sm" />
              <br />
            </FormControl>
          </ModalBody>
          <ModalFooter alignItems={"left"}>
            <Button
              size="sm"
              bg={"#ff8355"}
              _hover
              fontWeight={"400"}
              isLoading={AddLoading}
              onClick={() => {
                setAddLoading(true);
                setTimeout(() => {
                  setAddLoading(false);
                }, 3000);
              }}
            >
              Add Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Payment;
