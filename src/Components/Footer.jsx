import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">John Smith</div>
          <div className="footer-copyright">
            © {currentYear} John Smith. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;