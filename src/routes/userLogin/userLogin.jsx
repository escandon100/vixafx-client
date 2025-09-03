import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./userLogin.scss";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/userLogin/send",
        formData
      );

      localStorage.setItem("user-token", res.data.token);

      navigate("/userDashboard/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="userLogin">
      <div className="login-card">
        <div className="logo">
          <Link to="/"><img src="logo.png" alt="Trader Base FX" /></Link>
        </div>

        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Log in to access your dashboard</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="inputGroup">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <div className="passwordInput">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={togglePasswordVisibility} className="toggleIcon">
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          <button type="submit" className="loginBtn">
            Login
          </button>
          {error && <p className="error">{error}</p>}

          <div className="extraLinks">
            <p>Forgot your password?<Link to="/passwordReset" className="link">  Reset</Link></p>
            <p> Don’t have an account?<Link className="link" to="/userRegister"> Sign up</Link> </p>
          </div>
        </form>
        <footer>© 2025 Vixa Fx. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

export default UserLogin;
