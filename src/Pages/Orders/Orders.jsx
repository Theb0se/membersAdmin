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
  const [data, setdata] = useState([]);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://memberstocksserver.onrender.com/order/getallorder", {})
      .then(function (response) {
        const data = response.data;
        const reverseData = [...data].reverse();
        setgetData(reverseData);
        setdata(reverseData);
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

  const toFixed = (charge) => {
    const n = parseFloat(charge);
    var f = n.toFixed(2);
    return f;
  };

  return (
    <div className="orders">
      <div className="filters">
        <button
          onClick={() => {
            setdata(getData);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "Pending");
            setdata(FilterArr);
          }}
        >
          Pending
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "In progress");
            setdata(FilterArr);
          }}
        >
          {" "}
          In Progress
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "Completed");
            setdata(FilterArr);
          }}
        >
          Compleated
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "Partial");
            setdata(FilterArr);
          }}
        >
          Partial
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "Processing");
            setdata(FilterArr);
          }}
        >
          Processing
        </button>
        <button
          onClick={() => {
            const FilterArr = getData.filter((a) => a.status === "Canceled");
            setdata(FilterArr);
          }}
        >
          Canceled
        </button>
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
                <Th>Date</Th>
                <Th>Email</Th>
                <Th>Link</Th>
                <Th textAlign={"center"}>Charge</Th>
                <Th textAlign={"center"}>Mem St</Th>
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
                    <Td>{data.ordermain.orderNumber}</Td>
                    <Td>
                      {date(data.ordermain.createdAt)} <br />
                      {time(data.ordermain.createdAt)}
                    </Td>
                    <Td>{data.ordermain.email}</Td>
                    <Td>
                      <a href={data.ordermain.link}>{data.ordermain.link}</a>
                    </Td>
                    <Td textAlign={"center"}>{toFixed(data.charge)}</Td>
                    <Td textAlign={"center"}>
                      {data.ordermain.quantity * 0.13}
                    </Td>
                    <Td textAlign={"center"}>{data.start_count}</Td>
                    <Td textAlign={"center"}>{data.ordermain.quantity}</Td>
                    <Td className="service">
                      1 - Telegram Members () Non Drop ) ( 10 / Day ) ( Max -
                      30K ) <br />| Instant Start | Best Working - ₹ 130 Per
                      1000
                    </Td>
                    <Td>{data.status}</Td>
                    <Td textAlign={"center"}>{data.remains}</Td>
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
