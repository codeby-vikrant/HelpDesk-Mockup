import React from "react";
import Navbar from "../components/navbar";
import "../styles/user_dashboard.css";
import Footer from "../components/footer";
import MenuColumn from "../components/menu-column";

const cardData = [
  { title: "Total Tickets", number: 12, color: "#2E82FF" },
  { title: "Total Solved", number: 8, color: "#11FA68" },
  { title: "Total Awaiting Approval", number: 2, color: "#FE594E" },
  { title: "Total in Progress", number: 2, color: "#FCFC6C" },
];

const UserDashboardPage = () => {
  return (
    <div className="dashboard-root">
      <Navbar />
      <div className="dashboard-content">
        <MenuColumn />
        <main className="main-section">
          <h1 className="dashboard-heading">Dashboard</h1>
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
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboardPage;
