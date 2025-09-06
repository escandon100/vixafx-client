import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";import './adminLogin.scss';

const AdminLogin = () =>  {
  const [form, setForm] = useState({ username: '', password: '' });
  const [passwordVisible , setPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('https://vixafx-api-1.onrender.com/api/adminLogin/adminLogin', form);

      localStorage.setItem('admin-token', res.data.token);
      window.location.href = '/adminDashboard';
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

    const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };


  return (
    <div className="adminLogin">
      <div className="login-card">
        <div className="logo">
          <Link to="/"><img src="logo.png" alt="Trader Base FX" /></Link>
        </div>

        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Log in to access your dashboard</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="inputGroup">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder='admin username'
              value={form.email}
                onChange = {e => (setForm({...form , username : e.target.value }))}
            />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <div className="passwordInput">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="enter Password"
                value={form.password}
                onChange = {e => (setForm({...form , password : e.target.value }))}
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
          </form>
      </div>
    </div>
  
  );
}
export default AdminLogin



