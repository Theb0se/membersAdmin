import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  ModalFooter,
  Spinner,
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
import { DataState } from "../../Context/DataContext";
import axios from "axios";

function Payment(props) {
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

  const { payments, setpayments, isloading } = DataState();
  const [AddLoading, setAddLoading] = useState(false);
  const [Amount, setAmount] = useState(0);
  const [userID, setuserID] = useState();
  const [paymentId, setpaymentId] = useState();

  const approvePayment = () => {
    const data = {
      amount: Amount,
      userId: userID,
      paymentId: paymentId,
    };
    props.setbarLoading(true);
    axios
      .post(
        "https://memberstocksserver.onrender.com/payment/approvePayment",
        data
      )
      .then(function (response) {
        const msg = response.data;
        const revMsg = [...msg].reverse();
        setpayments(revMsg);
        props.setbarLoading(false);
        onEditClose();
      })
      .catch(function (error) {
        console.log(error);
        props.setbarLoading(false);
      });
  };
  const rejectPayment = () => {
    const data = {
      paymentId: paymentId,
    };
    props.setbarLoading(true);
    axios
      .post(
        "https://memberstocksserver.onrender.com/payment/rejectPayment",
        data
      )
      .then(function (response) {
        const msg = response.data;
        const revMsg = [...msg].reverse();
        setpayments(revMsg);
        props.setbarLoading(false);
        onEditClose();
      })
      .catch(function (error) {
        console.log(error);
        props.setbarLoading(false);
      });
  };

  const date = function (date) {
    const d = new Date(date);
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
          <Table variant="simple" size="md">
            <Thead>
              <Tr>
                <Th textAlign={"center"}>Action</Th>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th textAlign={"center"}>Amount</Th>
                <Th textAlign={"center"}>Method</Th>
                <Th>transaction ID</Th>
                <Th>Status</Th>
                <Th>Created</Th>
                <Th>Updated</Th>
              </Tr>
            </Thead>
            {isloading ? (
              <Spinner size="lg" color="#fff" />
            ) : (
              <Tbody>
                {payments?.map((pay, index) => (
                  <Tr color={"#fff"}>
                    <Td textAlign={"center"}>
                      {pay.status === "pending" ? (
                        <div
                          className="action"
                          onClick={() => {
                            onEditOpen();
                            setAmount(pay.amount);
                            setuserID(pay.userId);
                            setpaymentId(pay._id);
                          }}
                        >
                          Action
                        </div>
                      ) : (
                        <p>{pay.status}</p>
                      )}
                    </Td>
                    <Td>{payments?.length - index}</Td>
                    <Td>{pay.username}</Td>
                    <Td textAlign={"center"}>{pay.amount}</Td>
                    <Td textAlign={"center"}>{pay.method}</Td>
                    <Td>{pay.transactionID}</Td>
                    <Td>{pay.status}</Td>
                    <Td>
                      {date(pay.createdAt)} <br />
                      {time(pay.createdAt)}
                    </Td>
                    <Td>
                      {date(pay.updatedAt)}
                      <br /> {time(pay.updatedAt)}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </div>

      <Modal isOpen={isEditOpen} onClose={onEditClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color="#fff">
          <ModalHeader>Edit Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <button className="approve" onClick={approvePayment}>
              Approve
            </button>
            <button className="reject" onClick={rejectPayment}>
              Reject
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isAddOpen} onClose={onAddClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color="#fff">
          <ModalHeader>Add Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontWeight={"300"}>email</FormLabel>
              <Input type="email" size="sm" />
              <br /> <br />
              <FormLabel fontWeight={"300"}>Transaction Id</FormLabel>
              <Input type="text " size="sm" />
              <br />
              <br />
              <FormLabel fontWeight={"300"}>Amount</FormLabel>
              <Input type="tel" size="sm" />
              <br />
              <br />
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
            </FormControl>
          </ModalBody>
          <ModalFooter alignItems={"left"}>
            <Button
              size="sm"
              bg={"#ff8355"}
              _hover
              fontWeight={"400"}
              borderBottom={"2px solid #ea5923"}
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
