import React from "react";
import "../styles.css";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
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
        <label typeof="email">jenishjeyadhas@gmail.com</label>
      <p> Copy Right &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
