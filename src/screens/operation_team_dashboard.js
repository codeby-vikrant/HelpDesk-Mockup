import React from "react";
import Navbar from "../components/navbar";
import "../styles/operation_team_dashboard.css";
import Footer from "../components/footer";
import MenuColumnOperations from "../components/menu-column-operations";
import { PiChartBar, PiHeadset } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

const cardData = [
  { title: "Total Tickets", number: 12, color: "#2E82FF" },
  { title: "Total Solved", number: 8, color: "#11FA68" },
  { title: "Total Awaiting Approval", number: 2, color: "#FE594E" },
  { title: "Total in Progress", number: 2, color: "#FCFC6C" },
];

const OperationTeamDashboard = () => {
  return (
    <div className="operation-dashboard-root">
      <Navbar />
      <div className="operation-dashboard-content">
        <MenuColumnOperations />
        <main className="main-section">
          <h1 className="operation-dashboard-heading">Operation Dashboard</h1>
          <div className="cards-row">
            {cardData.map((card, idx) => (
              <div
                className="dashboard-card"
                style={{ background: card.color }}
                key={idx}
              >
                <div className="card-title">{card.title}</div>
                <div className="card-number">{card.number}</div>
              </div>
            ))}
          </div>
          <div className="bar-graph">
            <PiChartBar
              style={{
                fontSize: "25rem",
                marginLeft: "50px",
                marginTop: "10px",
                color: "#06386B",
              }}
            />
          </div>
          <div className="support-box">
            <PiHeadset
              style={{
                fontSize: "12rem",
                marginLeft: "50px",
                marginTop: "10px",
                color: "#06386B",
              }}
            />
            <MdOutlineSettings
              style={{
                fontSize: "12rem",
                marginLeft: "50px",
                marginTop: "10px",
                color: "#06386B",
              }}
            />
            <div className="support-text">
              <h3>Technical Supports</h3>
              <h3>Operation Team</h3>
            </div>
          </div>
          <div className="customer-feedback">
            <h1>Customer Feedback</h1>
            <IoStarSharp
              style={{
                fontSize: "4rem",
                color: "#EDF5E1",
                marginLeft: "100px",
              }}
            />
            <IoStarSharp style={{ fontSize: "4rem", color: "#EDF5E1" }} />
            <IoStarSharp style={{ fontSize: "4rem", color: "#EDF5E1" }} />
            <IoStarSharp style={{ fontSize: "4rem", color: "#EDF5E1" }} />
            <IoStarSharp style={{ fontSize: "4rem", color: "#EDF5E1" }} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default OperationTeamDashboard;
