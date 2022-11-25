import { Spinner } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { DataState } from "../../Context/DataContext";
import "./dash.css";

function Dashboard() {
  const { Orders, Users } = DataState();
  const [pending, setpending] = useState();
  const [processing, setprocessing] = useState();
  const [partial, setpartial] = useState();
  const [compleated, setcompleated] = useState();
  const [inProgress, setinProgress] = useState();
  const [cancelled, setcancelled] = useState();
  const [notCancelled, setnotCancelled] = useState();

  useEffect(() => {
    let cancelled = Orders?.filter((a) => a.status === "Canceled");
    let pending = Orders?.filter((a) => a.status === "Pending");
    let processing = Orders?.filter((a) => a.status === "Processing");
    let partial = Orders?.filter((a) => a.status === "Partial");
    let compleated = Orders?.filter((a) => a.status === "Completed");
    let inProgress = Orders?.filter((a) => a.status === "In progress");

    setcancelled(cancelled?.length);
    setpending(pending?.length);
    setprocessing(processing?.length);
    setpartial(partial?.length);
    setcompleated(compleated?.length);
    setinProgress(inProgress?.length);
    setnotCancelled(compleated);
  }, [Orders]);

  // sum of orderv\charge
  const apiCharge = notCancelled?.map((o) => parseFloat(o.charge));
  const totalOrderNumber = notCancelled?.map((o) =>
    parseFloat(o.ordermain.quantity)
  );

  var sum = 0;
  var sumOrders = 0;
  // Running the for loop
  for (let i = 0; i < apiCharge?.length; i++) {
    sum += apiCharge[i];
  }
  for (let i = 0; i < totalOrderNumber?.length; i++) {
    sumOrders += totalOrderNumber[i];
  }

  return (
    <div className="dash">
      <div className="infos">
        {/* earnings */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-money-bill-wave"></i>
            </span>
            <p className="amount">
              {Orders ? (sumOrders * 0.13 - sum).toFixed(2) : <Spinner />} ₹
            </p>
            <p> Total Earnings</p>
          </div>
        </div>
        {/* users */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-solid fa-users"></i>
            </span>
            <p className="amount">
              {Users?.length !== 0 ? Users.length : <Spinner />}
            </p>
            <p> Total Users</p>
          </div>
        </div>

        {/* Orders */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-clipboard-list"></i>
            </span>
            <p className="amount">{Orders ? Orders?.length : <Spinner />}</p>
            <p>Total Orders</p>
          </div>
        </div>
      </div>
      <div className="chart"></div>

      <div className="orderDetails">
        <div className="card">
          <div className="section">
            <span>
              <i class="fa-regular fa-spinner"></i>
            </span>
            <p className="value">{Orders ? pending : <Spinner />}</p>
            <p>Pending</p>
          </div>
          <div className="section">
            <span>
              <i class="fa-light fa-rotate-right"></i>
            </span>
            <p className="value">{Orders ? processing : <Spinner />}</p>
            <p>Proccesing</p>
          </div>
          <div className="section last">
            <span>
              <i class="fa-light fa-gear"></i>
            </span>
            <p className="value">{Orders ? partial : <Spinner />}</p>
            <p>Partial</p>
          </div>
        </div>
      </div>
      <div className="orderDetails">
        <div className="card">
          <div className="section">
            <span>
              <i class="fa-regular fa-badge-check"></i>
            </span>
            <p className="value">{Orders ? compleated : <Spinner />}</p>
            <p>Compleated</p>
          </div>
          <div className="section">
            <span>
              <i class="fa-light fa-ban"></i>
            </span>
            <p className="value">{Orders ? cancelled : <Spinner />}</p>
            <p>Cancelled</p>
          </div>
          <div className="section last">
            <span>
              <i class="fa-light fa-list-check"></i>
            </span>
            <p className="value">{Orders ? inProgress : <Spinner />}</p>
            <p>In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
