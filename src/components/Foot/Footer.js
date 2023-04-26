import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-content flex-column">
        
          <div className="container-fluid d-flex bg-dark text-white">
            <ul className="footer-links">
              <li><a to="#">About</a></li>
              <li><a to="#">Contact Us</a></li>
              <li><a to="#">Privacy Policy</a></li>
            </ul>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;