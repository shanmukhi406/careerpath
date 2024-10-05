import React from 'react';
import './Footer.css'; // Optional: If you want to add styles

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
      <p>© {year} Shanmukhi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
