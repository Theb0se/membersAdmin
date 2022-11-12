import React from "react";
import "./dash.css";

function Dashboard() {
  return (
    <div className="dash">
      <div className="infos">
        {/* earnings */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-money-bill-wave"></i>
            </span>
            <p className="amount">5435.222 ₹</p>
            <p> Total Earnings</p>
          </div>
        </div>
        {/* users */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-solid fa-users"></i>
            </span>
            <p className="amount">85 </p>
            <p> Total Users</p>
          </div>
        </div>

        {/* Orders */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-clipboard-list"></i>
            </span>
            <p className="amount">80</p>
            <p> Total Orders</p>
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
            <p className="value">55</p>
            <p>Pending</p>
          </div>
          <div className="section">
            <span>
              <i class="fa-light fa-rotate-right"></i>
            </span>
            <p className="value">55</p>
            <p>Proccesing</p>
          </div>
          <div className="section last">
            <span>
              <i class="fa-light fa-gear"></i>
            </span>
            <p className="value">55</p>
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
            <p className="value">55</p>
            <p>Compleated</p>
          </div>
          <div className="section">
            <span>
              <i class="fa-light fa-ban"></i>
            </span>
            <p className="value">55</p>
            <p>Cancelled</p>
          </div>
          <div className="section last">
            <span>
              <i class="fa-light fa-list-check"></i>
            </span>
            <p className="value">55</p>
            <p>In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
