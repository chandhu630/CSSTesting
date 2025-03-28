import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div style={{width:"80px", height:"50px"}} ><img style={{width:"50px", height:"50px"}}  src='https://www.godienergy.com/img/logoshort.webp' /></div>
      </div>

      <div className="footer-center">
        <div className="footer-socials">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div className="footer-right">
        <p style={{fontSize:"13px"}}>All information is subject to specific conditions | Copyright ©️ 2022</p>
        <p style={{fontSize:"13px"}}>GODI INDIA PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
