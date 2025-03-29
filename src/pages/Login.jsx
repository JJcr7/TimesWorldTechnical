import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Password validation

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have at least 8 characters, 1 uppercase, 1 number, and 1 special character.");
      return;
    }

    dispatch(login({ email, password }));
    navigate("/home");
  };

  const handleReg = () =>{

  }

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="form-container">
      <h2>Sign In</h2>   
      <span className="spantagdecor">New user? <Link className="linktagdecor" onClick={handleReg}>Create an account</Link></span> 
        <input type="email" placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error-text">{error}</p>}
        <label className="labelStyling"><input className="checkboxstyle" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>Keep me signed in</label>
        <button type="submit">Sign In</button>
        <div className="text-between-lines"> Or Sign In With </div>
        <div className="flex items-center w-full max-w-xs">
      </div>
              <div className="social-login">
              <div className="social-btn w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaGoogle size={20} />
              </div>
              <div className="social-btn w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaFacebookF size={20} />
              </div>
              <div className="social-btn w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaLinkedinIn size={20} />
              </div>
              <div className="social-btn w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaTwitter size={20} />
              </div>
            </div>
      </form>
    </div>
  );
};

export default Login;