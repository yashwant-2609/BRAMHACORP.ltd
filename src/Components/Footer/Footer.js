import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#">Our Legacy</a>
        <a href="#">Blog</a>
        <a href="#">Partners</a>
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Disclaimer</a>
      </div>

      <div className="footer-social">
        <a href="#"><img src="/footer/FB.png" alt="Facebook" /></a>
        <a href="#"><img src="/footer/Twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/footer/Insta.png" alt="Instagram" /></a>
        <a href="#"><img src="/footer/Linkedin.png" alt="LinkedIn" /></a>
        <a href="#"><img src="/footer/YT.png" alt="YouTube" /></a>
      </div>

      <div className='right'>
        <p>BramhaCorp Ltd © 2024. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
