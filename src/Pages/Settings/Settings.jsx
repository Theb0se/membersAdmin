import React from "react";
import "./Settings.css";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from "@chakra-ui/react";
import { DataState } from "../../Context/DataContext";

import { useState } from "react";
import axios from "axios";

function Settings() {
  const { Api, setApi } = DataState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [api, setapi] = useState();
  const [key, setkey] = useState();
  const [id, setid] = useState();
  const [loading, setloading] = useState(false);

  const updateApi = () => {
    setloading(true);
    const data = {
      api: api,
      key: key,
      id: id,
    };
    console.log(data);

    axios
      .post("https://memberstocksserver.onrender.com/updateApi", data)
      .then(function (response) {
        const msg = response.data;
        let newMsg = [];
        newMsg.push(msg);
        setloading(false);
        setApi(newMsg);
        onClose();
      })
      .catch(function (error) {
        const errmsg = JSON.stringify(error);
        console.log(errmsg);
        setloading(false);
      });
  };

  return (
    <div className="setting">
      <div className="card">
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab _selected={{ color: "#ff8355", border: "1px solid #ff8355" }}>
              Payments
            </Tab>
            <Tab _selected={{ color: "#ff8355", border: "1px solid #ff8355" }}>
              Providers
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <div className="table">
                <TableContainer>
                  <Table variant="simple" size={"md"} fontWeight={"400"}>
                    <Thead>
                      <Tr>
                        <Th>Method</Th>
                        <Th>Min</Th>
                        <Th>Max</Th>
                        <Th textAlign={"center"}>Edit</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Paytm</Td>
                        <Td>100</Td>
                        <Td>2000</Td>
                        <Td>
                          <p className="edit">edit</p>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>PhonePe</Td>
                        <Td>100</Td>
                        <Td>2000</Td>
                        <Td>
                          <p className="edit">edit</p>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Gpay</Td>
                        <Td>100</Td>
                        <Td>2000</Td>
                        <Td>
                          <p className="edit">edit</p>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </TabPanel>
            <TabPanel p={0}>
              <div className="table">
                <TableContainer>
                  <Table variant="simple" size={"md"} fontWeight={"400"}>
                    <Thead>
                      <Tr>
                        <Th>Provider</Th>
                        <Th textAlign={"center"}>Edit</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Api?.map((a) => (
                        <Tr>
                          <Td textTransform={"lowercase"}>{a.api}</Td>
                          <Td>
                            <p
                              className="edit"
                              onClick={() => {
                                setapi(a.api);
                                setkey(a.key);
                                setid(a._id);
                                onOpen();
                              }}
                            >
                              edit
                            </p>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Api Model */}
      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent bg={"#373539"} color="#fff">
          <ModalHeader>Edit Api</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Api</FormLabel>
              <Input
                type="text"
                value={api}
                onChange={(e) => {
                  setapi(e.target.value);
                }}
              />
              <br />
              <br />
              <FormLabel>Api Key</FormLabel>
              <Input
                type="text"
                value={key}
                onChange={(e) => {
                  setkey(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <button className="updateApi" onClick={updateApi}>
              {loading ? <Spinner /> : " Update Api"}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
export default Settings;
