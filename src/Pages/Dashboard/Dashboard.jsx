import React from "react";
import "./dash.css";

function Dashboard() {
  return (
    <div className="dash">
      <div className="infos">
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
              <i class="fa-regular fa-money-bill-wave"></i>
            </span>
            <p className="amount">85 </p>
            <p> Total Users</p>
          </div>
        </div>

        {/* Orders */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-money-bill-wave"></i>
            </span>
            <p className="amount">80</p>
            <p> Total Orders</p>
          </div>
        </div>

        {/* totle Members */}
        <div className="card">
          <div className="icon">
            <span>
              <i class="fa-regular fa-money-bill-wave"></i>
            </span>
            <p className="amount">58753</p>
            <p> Total Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
