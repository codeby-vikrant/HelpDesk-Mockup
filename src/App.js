import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignInPage from "./screens/sign_in_page";
import SignUpPage from "./screens/sign_up_page";
import UserDashboardPage from "./screens/user_dashboard_page";
import NewTicketPage from "./screens/new_ticket_page";
import { useState } from "react";
import OperationTeamDashboard from "./screens/operation_team_dashboard";
import TechnicalSupport from "./screens/technical_support_dashboard";
import Admin from "./screens/admin_dashboard";

const USERS = [
  {
    username: "user",
    password: "user123",
    role: "customer",
  },
  {
    username: "operator",
    password: "operator123",
    role: "operator",
  },
  {
    username: "technician",
    password: "technician123",
    role: "technician",
  },
  {
    username: "admin",
    password: "admin123",
    role: "admin",
  },
];

const App = () => {
  const [auth, setAuth] = useState(() => {
    const savedRole = localStorage.getItem("role");
    return {
      isLoggedIn: !!savedRole,
      role: savedRole || null,
    };
  });

  const handleLogin = (username, password) => {
    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setAuth({ isLoggedIn: true, role: user.role });
      localStorage.setItem("role", user.role);
      return user.role;
    }
    return null;
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, role: null });
    localStorage.removeItem("role");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            auth.isLoggedIn ? (
              auth.role === "admin" ? (
                <Navigate to="/admin" />
              ) : auth.role === "operator" ? (
                <Navigate to="/operator" />
              ) : auth.role === "technician" ? (
                <Navigate to="/technician" />
              ) : (
                <Navigate to="/dashboard" />
              )
            ) : (
              <SignInPage onLogin={handleLogin} />
            )
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            auth.isLoggedIn && auth.role === "customer" ? (
              <UserDashboardPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/new-ticket"
          element={
            auth.isLoggedIn && auth.role === "customer" ? (
              <NewTicketPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/operator"
          element={
            auth.isLoggedIn && auth.role === "operator" ? (
              <OperationTeamDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/technician"
          element={
            auth.isLoggedIn && auth.role === "technician" ? (
              <TechnicalSupport onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            auth.isLoggedIn && auth.role === "admin" ? (
              <Admin onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
