import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/Home">Home</a>
          <a href="Volunteer">About</a>
          <a href="Articles">Resources</a>
          <a href="ContactUs">Consult</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} PYSCHEVAL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
