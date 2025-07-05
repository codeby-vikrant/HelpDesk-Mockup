import { Link } from "react-router-dom";
import "../styles/sign_in.css";
import { useState } from "react";

const SignInPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = onLogin(username, password);
    if (!role) setError("Invalid character");
  };

  return (
    <div className="sign-in-page-container">
      <div className="sign-in-card">
        <div className="sign-in-header">
          <h1>Helpdesk System</h1>
        </div>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
          <div className="sign-in-links">
            <p className="forgot-password">Forgot Password</p>
            <Link to="/signup" className="sign-up-link">
              <p className="sign-up">Sign Up</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
