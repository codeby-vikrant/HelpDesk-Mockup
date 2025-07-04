import React, { useState } from "react";
import Footer from "../components/footer";
import MenuColumn from "../components/menu-column";
import Navbar from "../components/navbar";
import "../styles/new_ticket.css";
import "../styles/user_dashboard.css";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdAttach } from "react-icons/io";

const NewTicketPage = () => {
  const [form, setForm] = useState({
    ticketno: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
    captcha: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted!");
  };

  return (
    <div className="dashboard-root">
      <Navbar />
      <div className="dashboard-content">
        <MenuColumn />
        <main className="main-section">
          <h1 className="dashboard-heading">Create New Ticket</h1>
          <form className="ticket-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Ticket No.</label>
                <input
                  type="text"
                  name="ticketno"
                  value={form.ticketno}
                  onChange={handleChange}
                  style={{ width: "22rem" }}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="text"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  style={{ width: "22rem", marginLeft: "42px" }}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{ width: "22rem", marginLeft: "12px" }}
                  required
                />
              </div>
              <div className="form-group">
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  style={{ width: "22rem" }}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group vertical" style={{ flex: 1 }}>
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{ width: "69rem" }}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group vertical">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={{ width: "22rem" }}
                  required
                />
              </div>
              <div
                className="form-group vertical attach-wrapper"
                style={{ flex: 2 }}
              >
                <label>Description:</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  required
                  style={{
                    resize: "vertical",
                    height: "15rem",
                    width: "44rem",
                  }}
                />
                <label className="attach-label">
                  <IoMdAttach />
                  <input
                    type="file"
                    name="attachment"
                    className="attach-input"
                  />
                </label>
              </div>
            </div>
            <div className="form-row">
              <div
                className="form-group vertical"
                style={{ flex: 1, marginTop: "-50px", marginBottom: "50px" }}
              >
                <label style={{ marginTop: "-150px" }}>Type:</label>
                <input
                  type="text"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={{ width: "22rem" }}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group vertical" style={{ flex: 1 }}>
                <label style={{ marginTop: "-100px" }}>Priority:</label>
                <input
                  type="text"
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  style={{ width: "22rem" }}
                />
              </div>
            </div>
            <div className="form-row" style={{ alignItems: "center" }}>
              <div
                className="form-group"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div className="recaptcha-wrapper">
                  <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default NewTicketPage;
