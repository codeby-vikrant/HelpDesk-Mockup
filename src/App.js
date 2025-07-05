import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./screens/sign_in_page";
import SignUpPage from "./screens/sign_up_page";
import UserDashboardPage from "./screens/user_dashboard_page";
import NewTicketPage from "./screens/new_ticket_page";
import { useState } from "react";

const users = [
  {
    username: "user", password: "user123", role:"customer"
  },
  {
    username: "operator", password: "operator123", role: "operator"
  },
  {
    username: "technician", password: "technician123", role: "technician"
  },
  {
    username: "admin", password: "admin123", role: "admin"
  }
]

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/new-ticket" element={<NewTicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;
