import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Spinner,
  useDisclosure,
  Button,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Support.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { DataState } from "../../Context/DataContext";
import axios from "axios";

function Support(props) {
  const [name, setname] = useState();
  const [Id, setId] = useState();
  const [ticketId, setticketId] = useState();
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();
  // eslint-disable-next-line
  const [status, setstatus] = useState();
  const { allSupport, isloading } = DataState();

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const resovle = () => {
    const data = {
      supportId: Id,
    };
    props.setbarLoading(true);
    axios
      .post(
        "https://memberstocksserver.onrender.com/support/setSupportStatus",
        data
      )
      .then(function (response) {
        const data = response.data;
        console.log(data);
        props.setbarLoading(false);
        onClose();
      })
      .catch(function (error) {
        console.log(error);
        props.setbarLoading(false);
      });
  };

  return (
    <div className="support">
      <div className="searchPayment">
        <Flex>
          <input type="text" placeholder="Search" />
        </Flex>
      </div>

      <div className="table">
        <TableContainer>
          <Table variant="simple" size="md">
            <Thead>
              <Tr>
                <Th>Ticket Id</Th>
                <Th>Name</Th>
                <Th>Subject</Th>
                <Th textAlign={"center"}>Status</Th>
                <Th>Created</Th>
                <Th textAlign={"center"}>Action</Th>
              </Tr>
            </Thead>
            {isloading ? (
              <Spinner color="#fff" />
            ) : (
              <Tbody>
                {allSupport?.map((s) => (
                  <Tr color={"#fff"}>
                    <Td>{s?.TicketId}</Td>
                    <Td>{s?.username}</Td>
                    <Td>{s?.Subject}</Td>
                    <Td textAlign={"center"}>{s?.status}</Td>
                    <Td>
                      {date(s?.createdAt)} <br /> {time(s?.createdAt)}
                    </Td>
                    <Td textAlign={"center"}>
                      <div
                        className="view"
                        onClick={() => {
                          onOpen();
                          setId(s?._id);
                          setname(s?.username);
                          setmessage(s?.Message);
                          setsubject(s?.Subject);
                          setstatus(s?.status);
                          setticketId(s?.TicketId);
                        }}
                      >
                        View
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </div>

      {/* Model */}
      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color={"#fff"} fontWeight={"300"}>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Ticket Id</FormLabel>
            <Input
              type="text"
              value={ticketId}
              isDisabled
              size={"sm"}
              color={"#fff"}
              opacity="1"
            />

            <br />
            <br />

            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              isDisabled
              size={"sm"}
              color={"#fff"}
              opacity="1"
            />
            <br />
            <br />

            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              value={subject}
              isDisabled
              size={"sm"}
              color={"#fff"}
              opacity="1"
            />

            <br />
            <br />

            <FormLabel>Messege</FormLabel>
            <Textarea
              type="text"
              value={message}
              isDisabled
              size={"sm"}
              color={"#fff"}
              opacity="1"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose} size="sm">
              Close
            </Button>
            <Button
              bg={"#ff8355"}
              _hover
              size={"sm"}
              fontWeight={"400"}
              onClick={resovle}
            >
              Set Completed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Support;
