import React from "react";
import "./Settings.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function Settings() {
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
            <TabPanel p={2}>
              <div className="table">
                <TableContainer>
                  <Table variant="simple" size={"sm"} fontWeight={"400"}>
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
            <TabPanel>
              <div className="table">
                <TableContainer>
                  <Table variant="simple" size={"sm"} fontWeight={"400"}>
                    <Thead>
                      <Tr>
                        <Th>Provider</Th>
                        <Th>Balence</Th>
                        <Th textAlign={"center"}>Edit</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td textTransform={"lowercase"}>indianprovider.com</Td>
                        <Td>58763 ₹</Td>
                        <Td>
                          <p className="edit">edit</p>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
export default Settings;
