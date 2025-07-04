import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./screens/sign_in_page";
import SignUpPage from "./screens/sign_up_page";
import UserDashboardPage from "./screens/user_dashboard_page";
import NewTicketPage from "./screens/new_ticket_page";

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
