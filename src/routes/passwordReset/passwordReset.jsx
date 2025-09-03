import React from "react";
import "./passwordReset.scss";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="passwordReset">
      <div className="reset-card">
        <h1 className="title">Password Reset</h1>
        <p className="subtitle">
          Enter the email address you used during registration and we’ll send you
          a reset link.
        </p>

        <form>
          <div className="inputGroup">
            <label>Email address</label>
            <input
              placeholder="name@example.com"
              type="email"
              required
            />
          </div>

          <button type="submit" className="resetBtn">
            Send Reset Link
          </button>

          <Link className="loginLink" to="/userLogin">
            Back to Login
          </Link>
        </form>

        <footer>© 2025 Vixa Fx. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

export default PasswordReset;
