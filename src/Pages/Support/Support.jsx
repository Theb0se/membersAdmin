import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import "./Support.css";

function Support() {
  return (
    <div className="support">
      <div className="searchPayment">
        <Flex>
          <input type="text" placeholder="Search" />
        </Flex>
      </div>

      <div className="table">
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Ticket Id</Th>
                <Th textAlign={"center"}>User</Th>
                <Th>Email</Th>
                <Th>Subject</Th>
                <Th>Status</Th>
                <Th textAlign={"center"}>Created</Th>
                <Th textAlign={"center"}>Updated</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr color={"#fff"}>
                <Td isNumeric>87522474</Td>
                <Td>Theb0se</Td>
                <Td>Rishabhbose3@gmail.com</Td>
                <Td textAlign={"center"}>Payment not compleated</Td>
                <Td textAlign={"center"}>Pending</Td>
                <Td>2022-11-14 23:22:57</Td>
                <Td>2022-11-14 23:25:32</Td>
                <Td>Action</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Support;
