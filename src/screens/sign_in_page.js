import { Link } from "react-router-dom";
import "../styles/sign_in.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page-container">
      <div className="sign-in-card">
        <div className="sign-in-header">
          <h1>Helpdesk System</h1>
        </div>
        <div className="sign-in-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link to="/dashboard">
            <button>Sign In</button>
          </Link>
          <div className="sign-in-links">
            <p className="forgot-password">Forgot Password</p>
            <Link to="/signup" className="sign-up-link">
              <p className="sign-up">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
