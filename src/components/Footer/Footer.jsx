import React from 'react';
import './Footer.css';
import Instagram from '../../assets/instagram.png';
import TikTok from '../../assets/TikTok.png';
import Facebook from '../../assets/facebook.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
        <div className="social-links">
          <a href="https://www.instagram.com/lugo_oficial/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@lugo_oficial22?_t=ZS-8v4XWwhMKtb&_r=1" target="_blank" rel="noopener noreferrer">
            <img src={TikTok} alt="TikTok" />
          </a>
          <a href="https://web.facebook.com/lugotraineroficial" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
