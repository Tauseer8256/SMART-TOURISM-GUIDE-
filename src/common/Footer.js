import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram ,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>SMART TOURISM GUIDE</span>
            </a>
            <p>It is Better to Travel Well Than to Arrive</p>
            <div className="social-links d-flex mt-4">
            <a href="#" className="twitter"><FaTwitter /></a>
           <a href="#" className="facebook"><FaFacebook /></a>
           <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="linkedin"><FaLinkedin /></a>
            </div>
          </div>
  
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">About us</Link></li>
              <li><Link to="/">AI Assistance</Link></li>
            </ul>
          </div>
  
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/">Customer Support</Link></li>         
              <li><Link to="/">Cultural Immersion</Link></li>
              <li><Link to="/">Tips and Recommendations</Link></li>
            </ul>
          </div>
  
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
            <strong>Location:</strong>   43 Raymouth Rd.<br /> Baltemoer<br />3910, London <br />
              <strong>Phone:</strong> +971521661480<br />
              <strong>Email:</strong>  info@smarttourismguide@gmail.com<br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
