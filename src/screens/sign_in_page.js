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
          <button>Sign In</button>
          <div className="sign-in-links">
            <p className="forgot-password">Forgot Password</p>
            <p className="sign-up">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
