import React from "react";
import "./Orders.css";
import {
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

function Orders() {
  const [getData, setgetData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  let data = getData;

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://smmboostclub.herokuapp.com/order/getallorder", {})
      .then(function (response) {
        const data = response.data;
        const reverseData = [...data].reverse();
        setgetData(reverseData);
        setisLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setisLoading(false);
      });
  }, []);

  console.log(data);

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
        <div className="srch">
          <Input type="text" size={"sm"} color={"#fff"} />
          <Button size={"sm"}>
            <SearchIcon />
          </Button>
        </div>
      </div>

      <div className="table">
        <TableContainer>
          <Table variant="simple" size={"md"}>
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
              </Tr>
            </Thead>

            {isLoading ? (
              <Spinner color="#fff" size="lg" />
            ) : (
              <Tbody>
                {data?.map((data, index) => (
                  <Tr color={"#fff"}>
                    <Td>{getData.length - index}</Td>
                    <Td>{data.ordermain.username}</Td>
                    <Td>
                      <a href={data.ordermain.link}>{data.ordermain.link}</a>
                    </Td>
                    <Td textAlign={"center"}>{data.charge}</Td>
                    <Td textAlign={"center"}>{data.start_count}</Td>
                    <Td textAlign={"center"}>{data.ordermain.quantity}</Td>
                    <Td className="service">
                      1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max -
                      20K ) <br />| Instant Start | Best Working - ₹ 120 Per
                      1000
                    </Td>
                    <Td>{data.status}</Td>
                    <Td>{data.remains}</Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Orders;
