import React, { useState } from "react";
import "./login.css";
import LoginVector from "../../assets/login.svg";
import Spin from "../../assets/spin.svg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const notify = () => toast.error('Here is your toast.');

  const submitHandler = () => {
    navigate("/chats");
  }

  return (
    <div className="login_container">
      <div className="login_form">
        <h1>Login</h1>
        <p className="enter_details">Enter your account details</p>
        <input
          type="text"
          placeholder="Email"
          className="user_input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <a href="#forgot" className="forgot_pass">
          Forgot Password?
        </a>
        <button className="login_btn" onClick={notify}>
          {loading ? (
            <img src={Spin} style={{ height: "24px" }} />
          ) : (
            <p>Login</p>
          )}
        </button>
        <div className="signup_link">
          <p>Don’t have an account?</p>
          <button href="#signup">Sign up</button>
        </div>
      </div>

      <div className="welcome_section">
        <div className="content">
          <h1>
            Welcome to <span>student portal</span>
          </h1>
          <p>Login to access your account</p>
        </div>
        <img src={LoginVector} alt="" />
      </div>
    </div>
  );
};

export default Login;
