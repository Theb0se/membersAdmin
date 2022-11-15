import React from "react";
import "./Orders.css";
import {
  Button,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Orders() {
  return (
    <div className="orders">
      <div className="filters">
        <button>All</button>
        <button>Pending</button>
        <button>In Progress</button>
        <button>Compleated</button>
        <button>Partial</button>
        <button>Processing</button>
        <button>Canceled</button>
      </div>

      <div className="search">
        <div className="select">
          <Select size="sm">
            <option value="option1">Last 90 Days</option>
            <option value="option2">Last 1 Year</option>
          </Select>
        </div>

        <div className="srch">
          <Input type="text" size={"sm"} color={"#fff"} />
          <Button size={"sm"}>
            <SearchIcon />
          </Button>
        </div>
      </div>

      <div className="table">
        <TableContainer>
          <Table variant="simple" size={"sm"}>
            <Thead>
              <Tr py={20}>
                <Th>ID</Th>
                <Th>User</Th>
                <Th>Link</Th>
                <Th>Charge</Th>
                <Th>Start Count</Th>
                <Th>Quantity</Th>
                <Th>Service</Th>
                <Th>Status</Th>
                <Th>Remains</Th>
                <Th>Created</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr color={"#fff"}>
                <Td>257</Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td textAlign={"center"}>157.25</Td>
                <Td textAlign={"center"}>857</Td>
                <Td textAlign={"center"}>1000</Td>
                <Td className="service">
                  1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max - 20K ){" "}
                  <br />| Instant Start | Best Working - ₹ 120 Per 1000
                </Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td>2022-11-14 11:50:18</Td>
              </Tr>
              <Tr color={"#fff"}>
                <Td>257</Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td textAlign={"center"}>157.25</Td>
                <Td textAlign={"center"}>857</Td>
                <Td textAlign={"center"}>1000</Td>
                <Td className="service">
                  1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max - 20K ){" "}
                  <br />| Instant Start | Best Working - ₹ 120 Per 1000
                </Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td>2022-11-14 11:50:18</Td>
              </Tr>
              <Tr color={"#fff"}>
                <Td>257</Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td textAlign={"center"}>157.25</Td>
                <Td textAlign={"center"}>857</Td>
                <Td textAlign={"center"}>1000</Td>
                <Td className="service">
                  1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max - 20K ){" "}
                  <br />| Instant Start | Best Working - ₹ 120 Per 1000
                </Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td>2022-11-14 11:50:18</Td>
              </Tr>
              <Tr color={"#fff"}>
                <Td>257</Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td textAlign={"center"}>157.25</Td>
                <Td textAlign={"center"}>857</Td>
                <Td textAlign={"center"}>1000</Td>
                <Td className="service">
                  1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max - 20K ){" "}
                  <br />| Instant Start | Best Working - ₹ 120 Per 1000
                </Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td>2022-11-14 11:50:18</Td>
              </Tr>
              <Tr color={"#fff"}>
                <Td>257</Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td textAlign={"center"}>157.25</Td>
                <Td textAlign={"center"}>857</Td>
                <Td textAlign={"center"}>1000</Td>
                <Td className="service">
                  1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max - 20K ){" "}
                  <br />| Instant Start | Best Working - ₹ 120 Per 1000
                </Td>
                <Td>Theb0se</Td>
                <Td>theb0se.com</Td>
                <Td>2022-11-14 11:50:18</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Orders;
