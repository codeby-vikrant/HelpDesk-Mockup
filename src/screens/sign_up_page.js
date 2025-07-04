import "../styles/sign_up.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="sign-up-page-container">
      <div className="sign-up-card">
        <div className="sign-up-header">
          <h1>Helpdesk System</h1>
          <p>Sign up here</p>
        </div>
        <div className="sign-up-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email" />
          <Link to="/dashboard">
            <button>Sign Up</button>
          </Link>
          <div className="sign-up-links">
            <p className="forgot-password">Forgot Password</p>
            <Link to="/" className="sign-in-link">
              <p className="sign-up">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
